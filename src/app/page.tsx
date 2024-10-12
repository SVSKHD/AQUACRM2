"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import AquaAuthSignin from "@/components/auth/auth";
import AquaWelcome from "@/components/Header/Header";
import { FaClipboard, FaEnvelopeOpen } from "react-icons/fa6";
import Link from "next/link";

const AquaHome = () => {
  const { user } = useSelector((state: any) => ({ ...state }));

  // Function to extract the username from email
  const StringEmailSplit = (email: string) => {
    let username = email.split("@");
    return username[0];
  };

  // Sample offline array for demonstration
  const offline = [
    { name: "Invoices", link: "/invoices", icon: <FaEnvelopeOpen size={20} /> },
    { name: "Orders", link: "/orders", icon: <FaClipboard size={20} /> },
  ];

  return (
    <>
      {user.userState ? (
        <>
          {/* Displaying a welcome message with the split username */}
          <AquaWelcome title={StringEmailSplit(user?.user?.user?.email)} />
          <br />
          <div>
            <div className="overflow-hidden rounded-lg bg-white">
              <div className="px-4 py-5 sm:p-6">
                {/* Grid layout for the loop */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {offline.map((item, index) => (
                      <div
                        key={index}
                        className="overflow-hidden rounded-lg bg-white shadow"
                      >
                        <div className="px-4 py-5 sm:p-6">
                          <Link
                            href={item.link}
                            className="flex items-center text-2xl"
                          >
                            <span className="mr-2">{item.icon}</span>
                            <span>{item.name}</span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <AquaAuthSignin />
      )}
    </>
  );
};

export default AquaHome;
