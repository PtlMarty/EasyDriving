import { Card, CardContent, CardFooter } from "@/components/ui/card";
import "./../styles/card-section.css";
import { Button } from "./ui/button";

//todo add button to pop up a modal with more details about the transfer

const CardSection = ({ ClassName }: { ClassName: string }) => {
  return (
    <section
      className={`flex sm:flex-col gap-3 justify-center m-auto ${ClassName}`}
    >
      <div className="rounded-xl card-section">
        <Card className="size-96 flex flex-col border-none shadow-none m-6 xl:m-16">
          <CardContent className="flex flex-col justify-center items-center flex-grow relative">
            <div className="relative w-full h-full">
              <img
                src="https://media.cnn.com/api/v1/images/stellar/prod/170321103600-tokyo-top-50-haneda-airport.jpg?q=w_1110,c_fill/f_webp"
                alt="haneda airport"
                className="absolute inset-0 w-full h-full object-cover opacity-25 "
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <img
                  src="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/352364342_285124237285032_8773541718907617895_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mS08AnPxMWoQ7kNvgG8LKUI&_nc_zt=23&_nc_ht=scontent-nrt1-1.xx&_nc_gid=AQEW-qYinYgwDCcS0ovsdZ5&oh=00_AYC4vjPY1-s_m9JnR6vUKCypNtbze7dgwLdfLvBNDIbe5w&oe=67238091"
                  alt=""
                  className="h-16 w-16"
                />
                <p>Your transfer From Haneda to your Hotel</p>
                <div className="flex justify-center items-center mt-3">
                  <CardFooter>
                    <Button variant={"default"}>Click Here</Button>
                  </CardFooter>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="rounded-xl card-section">
        <Card className="size-96 flex flex-col border-none shadow-none m-6">
          <CardContent className="flex flex-col justify-center items-center flex-grow relative">
            <div className="relative w-full h-full">
              <img
                src="https://media.cnn.com/api/v1/images/stellar/prod/170321103600-tokyo-top-50-haneda-airport.jpg?q=w_1110,c_fill/f_webp"
                alt="haneda airport"
                className="absolute inset-0 w-full h-full object-cover opacity-25 "
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <img
                  src="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/352364342_285124237285032_8773541718907617895_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mS08AnPxMWoQ7kNvgG8LKUI&_nc_zt=23&_nc_ht=scontent-nrt1-1.xx&_nc_gid=AQEW-qYinYgwDCcS0ovsdZ5&oh=00_AYC4vjPY1-s_m9JnR6vUKCypNtbze7dgwLdfLvBNDIbe5w&oe=67238091"
                  alt=""
                  className="h-16 w-16"
                />
                <p>Your transfer From Haneda to your Hotel</p>
                <div className="flex justify-center items-center mt-3">
                  <CardFooter>
                    <Button variant={"default"}>Click Here</Button>
                  </CardFooter>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="rounded-xl card-section">
        <Card className="size-96 flex flex-col border-none shadow-none m-6">
          <CardContent className="flex flex-col justify-center items-center flex-grow relative">
            <div className="relative w-full h-full">
              <img
                src="https://media.cnn.com/api/v1/images/stellar/prod/170321103600-tokyo-top-50-haneda-airport.jpg?q=w_1110,c_fill/f_webp"
                alt="haneda airport"
                className="absolute inset-0 w-full h-full object-cover opacity-25 "
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <img
                  src="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/352364342_285124237285032_8773541718907617895_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mS08AnPxMWoQ7kNvgG8LKUI&_nc_zt=23&_nc_ht=scontent-nrt1-1.xx&_nc_gid=AQEW-qYinYgwDCcS0ovsdZ5&oh=00_AYC4vjPY1-s_m9JnR6vUKCypNtbze7dgwLdfLvBNDIbe5w&oe=67238091"
                  alt=""
                  className="h-16 w-16"
                />
                <p>Your transfer From Haneda to your Hotel</p>
                <div className="flex justify-center items-center mt-3">
                  <CardFooter>
                    <Button variant={"default"}>Click Here</Button>
                  </CardFooter>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CardSection;
