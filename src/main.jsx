import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { All } from "./components/All";
import { Clothes } from "./components/Clothes";
import Cloth1 from "./components/image-view/clothes-view/Cloth1";
import Cloth2 from "./components/image-view/clothes-view/Cloth2";
import Cloth3 from "./components/image-view/clothes-view/Cloth3";
import Cloth4 from "./components/image-view/clothes-view/Cloth4";

/* SHOES IMPORTS  */
import Shoe_1 from "./components/image-view/shoes-view/shoe1";
import Shoe_2 from "./components/image-view/shoes-view/shoe2";
import Shoe_3 from "./components/image-view/shoes-view/shoe3";
import Shoe_4 from "./components/image-view/shoes-view/shoe4";
import Shoe_5 from "./components/image-view/shoes-view/shoe5";
import Shoe_6 from "./components/image-view/shoes-view/shoe6";
import Shoe_7 from "./components/image-view/shoes-view/shoe7";
import Shoe_8 from "./components/image-view/shoes-view/shoe8";
import Shoe_9 from "./components/image-view/shoes-view/shoe9";
import Shoe_10 from "./components/image-view/shoes-view/shoe10";
import Shoe_11 from "./components/image-view/shoes-view/shoe11";
import Shoe_12 from "./components/image-view/shoes-view/shoe12";
import Shoe_13 from "./components/image-view/shoes-view/shoe13";
import Shoe_14 from "./components/image-view/shoes-view/shoe14";
import Shoe_15 from "./components/image-view/shoes-view/shoe15";
import Shoe_16 from "./components/image-view/shoes-view/shoe16";
import Shoe_17 from "./components/image-view/shoes-view/shoe17";
import Shoe_18 from "./components/image-view/shoes-view/shoe18";
import Shoe_19 from "./components/image-view/shoes-view/shoe19";
import Shoe_20 from "./components/image-view/shoes-view/shoe20";
import Shoe_21 from "./components/image-view/shoes-view/shoe21";
import Shoe_22 from "./components/image-view/shoes-view/shoe22";
import Shoe_23 from "./components/image-view/shoes-view/shoe23";
import Shoe_24 from "./components/image-view/shoes-view/shoe24";
import Shoe_25 from "./components/image-view/shoes-view/shoe25";
import Shoe_26 from "./components/image-view/shoes-view/shoe26";
import Shoe_27 from "./components/image-view/shoes-view/shoe27";
import Shoe_28 from "./components/image-view/shoes-view/shoe28";
import Shoe_29 from "./components/image-view/shoes-view/shoe29";
import Shoe_30 from "./components/image-view/shoes-view/shoe30";
import Shoe_31 from "./components/image-view/shoes-view/shoe31";
import Shoe_32 from "./components/image-view/shoes-view/shoe32";
import Shoe_33 from "./components/image-view/shoes-view/shoe33";
import Shoe_34 from "./components/image-view/shoes-view/shoe34";
import Shoe_35 from "./components/image-view/shoes-view/shoe35";
import Shoe_36 from "./components/image-view/shoes-view/shoe36";
import Shoe_37 from "./components/image-view/shoes-view/shoe37";
import Shoe_38 from "./components/image-view/shoes-view/shoe38";
import Shoe_39 from "./components/image-view/shoes-view/shoe39";
import Shoe_40 from "./components/image-view/shoes-view/shoe40";
import Shoe_41 from "./components/image-view/shoes-view/shoe41";
import Shoe_42 from "./components/image-view/shoes-view/shoe42";
import Shoe_43 from "./components/image-view/shoes-view/shoe43";
import Shoe_44 from "./components/image-view/shoes-view/shoe44";
import Shoe_45 from "./components/image-view/shoes-view/shoe45";
import Shoe_46 from "./components/image-view/shoes-view/shoe46";
import Shoe_47 from "./components/image-view/shoes-view/shoe47";
import Shoe_48 from "./components/image-view/shoes-view/shoe48";
import Shoe_49 from "./components/image-view/shoes-view/shoe49";
import Shoe_50 from "./components/image-view/shoes-view/shoe50";
import Shoe_51 from "./components/image-view/shoes-view/shoe51";
import Shoe_52 from "./components/image-view/shoes-view/shoe52";
import Shoe_53 from "./components/image-view/shoes-view/shoe53";
import Shoe_54 from "./components/image-view/shoes-view/shoe54";
import Shoe_55 from "./components/image-view/shoes-view/shoe55";
import Shoe_56 from "./components/image-view/shoes-view/shoe56";
import Shoe_57 from "./components/image-view/shoes-view/shoe57";
import Shoe_58 from "./components/image-view/shoes-view/shoe58";
import Shoe_59 from "./components/image-view/shoes-view/shoe59";
import Shoe_60 from "./components/image-view/shoes-view/shoe60";
import Shoe_61 from "./components/image-view/shoes-view/shoe61";
import Shoe_62 from "./components/image-view/shoes-view/shoe62";
import Shoe_63 from "./components/image-view/shoes-view/shoe63";
import Shoe_64 from "./components/image-view/shoes-view/shoe64";
import Shoe_65 from "./components/image-view/shoes-view/shoe65";
import Shoe_66 from "./components/image-view/shoes-view/shoe66";
import Shoe_67 from "./components/image-view/shoes-view/shoe67";
import Shoe_68 from "./components/image-view/shoes-view/shoe68";
import Shoe_69 from "./components/image-view/shoes-view/shoe69";
import Shoe_70 from "./components/image-view/shoes-view/shoe70";
import Shoe_71 from "./components/image-view/shoes-view/shoe71";
import Shoe_72 from "./components/image-view/shoes-view/shoe72";
import Shoe_73 from "./components/image-view/shoes-view/shoe73";
import Shoe_74 from "./components/image-view/shoes-view/shoe74";
import Shoe_75 from "./components/image-view/shoes-view/shoe75";
import Shoe_76 from "./components/image-view/shoes-view/shoe76";
import Shoe_77 from "./components/image-view/shoes-view/shoe77";
import Shoe_78 from "./components/image-view/shoes-view/shoe78";
import Shoe_79 from "./components/image-view/shoes-view/shoe79";
import Shoe_80 from "./components/image-view/shoes-view/shoe80";
import Shoe_81 from "./components/image-view/shoes-view/shoe81";
import Shoe_82 from "./components/image-view/shoes-view/shoe82";
import Shoe_83 from "./components/image-view/shoes-view/shoe83";
import Shoe_84 from "./components/image-view/shoes-view/shoe84";
import Shoe_85 from "./components/image-view/shoes-view/shoe85";
import Shoe_86 from "./components/image-view/shoes-view/shoe86";
import Shoe_87 from "./components/image-view/shoes-view/shoe87";
import Shoe_88 from "./components/image-view/shoes-view/shoe88";
import Shoe_89 from "./components/image-view/shoes-view/shoe89";
import Shoe_90 from "./components/image-view/shoes-view/shoe90";
import Shoe_91 from "./components/image-view/shoes-view/shoe91";
import Shoe_92 from "./components/image-view/shoes-view/shoe92";
import Shoe_93 from "./components/image-view/shoes-view/shoe93";
import Shoe_94 from "./components/image-view/shoes-view/shoe94";
import Shoe_95 from "./components/image-view/shoes-view/shoe95";
import Shoe_96 from "./components/image-view/shoes-view/shoe96";
import Shoe_97 from "./components/image-view/shoes-view/shoe97";
import Shoe_98 from "./components/image-view/shoes-view/shoe98";
import Shoe_99 from "./components/image-view/shoes-view/shoe99";
import Shoe_100 from "./components/image-view/shoes-view/shoe100";
import Shoe_101 from "./components/image-view/shoes-view/shoe101";
import Shoe_102 from "./components/image-view/shoes-view/shoe102";
import Shoe_103 from "./components/image-view/shoes-view/shoe103";
import Shoe_104 from "./components/image-view/shoes-view/shoe104";
import Shoe_105 from "./components/image-view/shoes-view/shoe105";
import Shoe_106 from "./components/image-view/shoes-view/shoe106";
import Shoe_107 from "./components/image-view/shoes-view/shoe107";
/*  */
/*  */
import Products from "./components/Products";
import Shoes from "./components/Shoes";
import "./index.css";
import "./styles/custom.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<All />} />
      <Route path="/clothes" element={<Clothes />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/products" element={<Products />} />

      {/* Image View */}

      {/* Clothes View */}
      <Route path="/cloth1" element={<Cloth1 />} />
      <Route path="/cloth2" element={<Cloth2 />} />
      <Route path="/cloth3" element={<Cloth3 />} />
      <Route path="/cloth4" element={<Cloth4 />} />

      {/* Shoes View */}
      <Route path="/shoe1" element={<Shoe_1 />} />
      <Route path="/shoe2" element={<Shoe_2 />} />
      <Route path="/shoe3" element={<Shoe_3 />} />
      <Route path="/shoe4" element={<Shoe_4 />} />
      <Route path="/shoe5" element={<Shoe_5 />} />
      <Route path="/shoe6" element={<Shoe_6 />} />
      <Route path="/shoe7" element={<Shoe_7 />} />
      <Route path="/shoe8" element={<Shoe_8 />} />
      <Route path="/shoe9" element={<Shoe_9 />} />
      <Route path="/shoe10" element={<Shoe_10 />} />
      <Route path="/shoe11" element={<Shoe_11 />} />
      <Route path="/shoe12" element={<Shoe_12 />} />
      <Route path="/shoe13" element={<Shoe_13 />} />
      <Route path="/shoe14" element={<Shoe_14 />} />
      <Route path="/shoe15" element={<Shoe_15 />} />
      <Route path="/shoe16" element={<Shoe_16 />} />
      <Route path="/shoe17" element={<Shoe_17 />} />
      <Route path="/shoe18" element={<Shoe_18 />} />
      <Route path="/shoe19" element={<Shoe_19 />} />
      <Route path="/shoe20" element={<Shoe_20 />} />
      <Route path="/shoe21" element={<Shoe_21 />} />
      <Route path="/shoe22" element={<Shoe_22 />} />
      <Route path="/shoe23" element={<Shoe_23 />} />
      <Route path="/shoe24" element={<Shoe_24 />} />
      <Route path="/shoe25" element={<Shoe_25 />} />
      <Route path="/shoe26" element={<Shoe_26 />} />
      <Route path="/shoe27" element={<Shoe_27 />} />
      <Route path="/shoe28" element={<Shoe_28 />} />
      <Route path="/shoe29" element={<Shoe_29 />} />
      <Route path="/shoe30" element={<Shoe_30 />} />
      <Route path="/shoe31" element={<Shoe_31 />} />
      <Route path="/shoe32" element={<Shoe_32 />} />
      <Route path="/shoe33" element={<Shoe_33 />} />
      <Route path="/shoe34" element={<Shoe_34 />} />
      <Route path="/shoe35" element={<Shoe_35 />} />
      <Route path="/shoe36" element={<Shoe_36 />} />
      <Route path="/shoe37" element={<Shoe_37 />} />
      <Route path="/shoe38" element={<Shoe_38 />} />
      <Route path="/shoe39" element={<Shoe_39 />} />
      <Route path="/shoe40" element={<Shoe_40 />} />
      <Route path="/shoe41" element={<Shoe_41 />} />
      <Route path="/shoe42" element={<Shoe_42 />} />
      <Route path="/shoe43" element={<Shoe_43 />} />
      <Route path="/shoe44" element={<Shoe_44 />} />
      <Route path="/shoe45" element={<Shoe_45 />} />
      <Route path="/shoe46" element={<Shoe_46 />} />
      <Route path="/shoe47" element={<Shoe_47 />} />
      <Route path="/shoe48" element={<Shoe_48 />} />
      <Route path="/shoe49" element={<Shoe_49 />} />
      <Route path="/shoe50" element={<Shoe_50 />} />
      <Route path="/shoe51" element={<Shoe_51 />} />
      <Route path="/shoe52" element={<Shoe_52 />} />
      <Route path="/shoe53" element={<Shoe_53 />} />
      <Route path="/shoe54" element={<Shoe_54 />} />
      <Route path="/shoe55" element={<Shoe_55 />} />
      <Route path="/shoe56" element={<Shoe_56 />} />
      <Route path="/shoe57" element={<Shoe_57 />} />
      <Route path="/shoe58" element={<Shoe_58 />} />
      <Route path="/shoe59" element={<Shoe_59 />} />
      <Route path="/shoe60" element={<Shoe_60 />} />
      <Route path="/shoe61" element={<Shoe_61 />} />
      <Route path="/shoe62" element={<Shoe_62 />} />
      <Route path="/shoe63" element={<Shoe_63 />} />
      <Route path="/shoe64" element={<Shoe_64 />} />
      <Route path="/shoe65" element={<Shoe_65 />} />
      <Route path="/shoe66" element={<Shoe_66 />} />
      <Route path="/shoe67" element={<Shoe_67 />} />
      <Route path="/shoe68" element={<Shoe_68 />} />
      <Route path="/shoe69" element={<Shoe_69 />} />
      <Route path="/shoe70" element={<Shoe_70 />} />
      <Route path="/shoe71" element={<Shoe_71 />} />
      <Route path="/shoe72" element={<Shoe_72 />} />
      <Route path="/shoe73" element={<Shoe_73 />} />
      <Route path="/shoe74" element={<Shoe_74 />} />
      <Route path="/shoe75" element={<Shoe_75 />} />
      <Route path="/shoe76" element={<Shoe_76 />} />
      <Route path="/shoe77" element={<Shoe_77 />} />
      <Route path="/shoe78" element={<Shoe_78 />} />
      <Route path="/shoe79" element={<Shoe_79 />} />
      <Route path="/shoe80" element={<Shoe_80 />} />
      <Route path="/shoe81" element={<Shoe_81 />} />
      <Route path="/shoe82" element={<Shoe_82 />} />
      <Route path="/shoe83" element={<Shoe_83 />} />
      <Route path="/shoe84" element={<Shoe_84 />} />
      <Route path="/shoe85" element={<Shoe_85 />} />
      <Route path="/shoe86" element={<Shoe_86 />} />
      <Route path="/shoe87" element={<Shoe_87 />} />
      <Route path="/shoe88" element={<Shoe_88 />} />
      <Route path="/shoe89" element={<Shoe_89 />} />
      <Route path="/shoe90" element={<Shoe_90 />} />
      <Route path="/shoe91" element={<Shoe_91 />} />
      <Route path="/shoe92" element={<Shoe_92 />} />
      <Route path="/shoe93" element={<Shoe_93 />} />
      <Route path="/shoe94" element={<Shoe_94 />} />
      <Route path="/shoe95" element={<Shoe_95 />} />
      <Route path="/shoe96" element={<Shoe_96 />} />
      <Route path="/shoe97" element={<Shoe_97 />} />
      <Route path="/shoe98" element={<Shoe_98 />} />
      <Route path="/shoe99" element={<Shoe_99 />} />
      <Route path="/shoe100" element={<Shoe_100 />} />
      <Route path="/shoe101" element={<Shoe_101 />} />
      <Route path="/shoe102" element={<Shoe_102 />} />
      <Route path="/shoe103" element={<Shoe_103 />} />
      <Route path="/shoe104" element={<Shoe_104 />} />
      <Route path="/shoe105" element={<Shoe_105 />} />
      <Route path="/shoe106" element={<Shoe_106 />} />
      <Route path="/shoe107" element={<Shoe_107 />} />
    </Routes>
  </BrowserRouter>
);
