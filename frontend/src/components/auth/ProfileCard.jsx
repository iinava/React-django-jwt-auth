import React from "react";
import { Tabs, Tab, Card, CardBody, Button } from "@nextui-org/react";
import Profile from "../../pages/auth/Profile";

export default function ProfileCard() {
  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div className="flex w-[95vw] flex-col rounded-2xl ">
        <Tabs aria-label="Options">
          <Tab key="Account" title="Account ✒️">
            <Card>
              <CardBody>
                <Profile />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="Logout" title="Logout📤">
            <Card>
              <CardBody>
            <div className="flex min-h-[70vh] flex-col items-center  text-left space-y-10">
            <h1 className="text-4xl">Are You sure you want to log out of you account?</h1>.
            <img className="w-40 h-40 -rotate-45" src="https://ik.imagekit.io/nh40wkvsj/techny-sad-face-icon.png?updatedAt=1721040366379" alt="" />
           
           <Button className="w-[50vw]">Logout</Button>
            </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="Extra" title="Extra">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>{" "}
    </div>
  );
}
