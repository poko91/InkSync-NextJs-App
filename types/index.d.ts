declare type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

declare type UserType = "creator" | "editor" | "viewer";

declare type CreateDocumentParams = {
  userId: string;
  email: string;
};

declare type AddDocumentBtnProps = {
  userId: string;
  email: string;
};

declare type SearchParamProps = {
  params: {
    id: string;
  };
};

declare type CollaborativeRoomProps = {
  roomId: string;
  roomMetadata: RoomMetadata;
};
