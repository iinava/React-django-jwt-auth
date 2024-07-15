import React, { useEffect, useState } from "react";
import api from "../../api";
import { Button, Input, Textarea } from "@nextui-org/react";

export default function Profile() {
  const [profile, setProfile] = useState({
    legal_name: "",
    phone: "",
    city: "",
    country: "",
    address: ""
  });

  useEffect(() => {
    api.get("http://127.0.0.1:8000/api/user/profile/").then((response) => {
      setProfile(response.data);
      console.log(response.data);
    });
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // console.log(profile);
    api.put("http://127.0.0.1:8000/api/user/profile/", profile).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="w-full  min-h-[70vh]">
      <section>
        <div className="mx-auto max-w-screen-xl py-3">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12 ">
              <p className="max-w-xl text-lg">
                Provide details are used for verification purposes only. Make
                sure you fill out the correct information.
              </p>
            </div>
            <div className="rounded-lg  shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleProfileUpdate} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="legal_name">
                    Legal name
                  </label>
                  <Input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Enter your legal name"
                    type="text"
                    id="legal_name"
                    value={profile.legal_name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <Input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Enter your phone number"
                    type="text"
                    id="phone"
                    value={profile.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="city">
                      City
                    </label>
                    <Input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Enter current city"
                      type="text"
                      id="city"
                      value={profile.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="country">
                      Country
                    </label>
                    <Input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Country"
                      type="text"
                      id="country"
                      value={profile.country}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="address">
                    Address
                  </label>
                  <Textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Enter your current address"
                    rows="8"
                    id="address"
                    name="address"
                    value={profile.address}
                    onChange={handleChange}
                  ></Textarea>
                </div>
                <div className="mt-4 px-3">
                  <Button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-white px-3 py-3 font-medium text-black"
                  >
                    Update Profile
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}
