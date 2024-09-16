import CollaborativeRoom from "@/components/CollaborativeRoom";
import { getDocument } from "@/lib/actions/room.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Document = async ({ params: { id } }: SearchParamProps) => {
  // Get current user
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");

  // Get document using current userId
  const room = await getDocument({
    roomId: id,
    userId: clerkUser.emailAddresses[0].emailAddress,
  });

  if (!room) redirect("/documents/");

  return (
    <div className="flex w-full flex-col items-center">
      <CollaborativeRoom roomId={id} roomMetadata={room.metaData} />
    </div>
  );
};

export default Document;
