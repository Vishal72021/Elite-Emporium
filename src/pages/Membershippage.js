import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MembershipCard from "../components/MembershipCard";
import MembershipTable from "../components/MembershipTable";
import MembershipHead from "../components/MembershipHead";

export default function Membershippage() {
  return (
    <>
      <Header proColor="secondary" />
      <div className="container py-3">
        <MembershipHead />
        <main>
          <MembershipCard />
          <h2 className="display-6 text-center mb-4">Compare plans</h2>
          <MembershipTable />
        </main>
      </div>
      <Footer />
    </>
  );
}
