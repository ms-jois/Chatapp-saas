import { authOptions } from "@/auth"
import AdminControls from "@/components/ui/AdminControls";
import ChatInput from "@/components/ui/ChatInput"
import ChatMembersBadges from "@/components/ui/ChatMembersBadges";
import ChatMessages from "@/components/ui/ChatMessages";
import { chatMembersRef } from "@/lib/converters/ChatMembers";
import { sortedMessagesRef } from "@/lib/converters/Message";
import { getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


type Props ={
  params: {
    chatId: string;
  };
};

 async function ChatPage({params: {chatId}}: Props) {
  const session = await getServerSession(authOptions);

  const initialMessages = (await getDocs(sortedMessagesRef(chatId))).docs.map(
    (doc) =>doc.data()
  );

  const hasAccess =(await getDocs(chatMembersRef(chatId))).docs
  .map((doc) => doc.id)
  .includes(session?.user.id!); 

    if (!hasAccess) redirect("/chat?error=permission");

   return (
     <>
      <AdminControls chatId={chatId} />
     <ChatMembersBadges  chatId={chatId}/>
     
      <div className="flex-1">
        <ChatMessages
        chatId={chatId}
        session={session}
        initialMessages= {initialMessages}
        />
      </div>
     <ChatInput chatId={chatId} />
     </>
   );
 }
 
 export default ChatPage