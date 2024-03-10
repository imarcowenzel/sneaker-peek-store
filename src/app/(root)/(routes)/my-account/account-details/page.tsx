import { UserProfile } from "@clerk/nextjs";
import React from "react";

const AccountDetailsPage = () => {
  return (
    <div className="px-4 py-5 md:px-8 lg:px-9 lg:py-12 xl:px-24 xl:py-20">
      <UserProfile />
    </div>
  );
};

export default AccountDetailsPage;
