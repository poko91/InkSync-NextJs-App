declare type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

declare type AccessType = ["room:write"] | ["room:read", "room:presence:write"];
declare type RoomAccesses = Record<string, AccessType>;
declare type UserType = "creator" | "editor" | "viewer";

declare type RoomMetadata = {
  creatorId: string;
  email: string;
  title: string;
};

declare type CreateDocumentParams = {
  userId: string;
  email: string;
};

declare type AddDocumentBtnProps = {
  userId: string;
  email: string;
};

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type CollaborativeRoomProps = {
  roomId: string;
  roomMetadata: RoomMetadata;
  users: User[];
  currentUserType: UserType;
};

declare type UserType = "creator" | "editor" | "viewer";

declare type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  color: string;
  userType?: UserType;
};

declare type EditorProps = { roomId: string; currentUserType: UserType };

declare type ThreadWrapperProps = { thread: ThreadData<BaseMetadata> };

declare type ShareModalProps = {
  roomId: string;
  collaborators: User[];
  creatorId: string;
  currentUserType: UserType;
};
