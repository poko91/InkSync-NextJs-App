"use client";

import { useSelf } from "@liveblocks/react/suspense";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import UserTypeSelector from "./UserTypeSelector";

const ShareModal = ({ roomId, collaborators, creatorId, currentUserType }: ShareModalProps) => {
  const user = useSelf();

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<UserType>("viewer");

  const shareDocumentHandler = async () => {
    console.log("shared document");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button className="gradient-purple flex h-9 gap-1 px-3" disabled={currentUserType !== "editor"}>
          <Image src="/assets/icons/share.svg" alt="share" width={20} height={20} className="min-w-4 md:size-5" />
          <p className="mr-1 hidden sm:block">Share</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog">
        <DialogHeader>
          <DialogTitle>Manage who can view this document.</DialogTitle>
          <DialogDescription>Select which users can view and edit this document.</DialogDescription>
        </DialogHeader>

        <Label htmlFor="email" className="mt-6 text-blue-100">
          Email address
        </Label>
        <div className="flex items-center gap-3">
          <div className="flex flex-1 rounded-md bg-dark-400">
            <Input id="email" placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)} className="share-input" />
            <UserTypeSelector userType={userType} setUserType={setUserType} />
          </div>
          <Button type="submit" onClick={shareDocumentHandler} className="gradient-purple flex h-full gap-1 px-5" disabled={loading}>
            {loading ? "Sending" : "Invite"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
