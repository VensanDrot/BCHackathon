import LanguageSelector from "./LanguageSelector";
import UserFrame from "./UserFrame";
import Cookies from "js-cookie";
import placeHolder from "../img/eavatar.svg";
import { useNavigate } from "react-router-dom";
import { GetCorrectedLinkImg } from "../utils/getCorrectedLink";
import logo from "../img/logo.png";

export const TopMenu = () => {
  const accessToken = Cookies.get("access");
  const navigate = useNavigate();

  const name = `${Cookies.get("name")} ${Cookies.get("lastname") ? Cookies.get("lastname") : ""}`;
  const avatar = Cookies.get("avatar") ? GetCorrectedLinkImg(Cookies?.get("avatar") as string) : placeHolder;

  return (
    <div className="py-5 px-10 w-screen h-[81px] flex justify-between">
      <div onClick={() => navigate(accessToken ? "/" : "/login")}>
        <img src={logo} className="h-full overflow-hidden rounded-md" alt="" />
      </div>
      <div className="flex gap-3 items-center">
        <LanguageSelector />
        {accessToken && <UserFrame name={name} url={avatar} />}
      </div>
    </div>
  );
};
