import React, { use, useEffect, useState } from "react";
import "./SpaceShip.css";
const SpaceShip = () => {
  const [colorprice, setColorPrice] = useState("+0€");
  const [powerprice, setPowerPrice] = useState("+200€");
  const [wrapdriveprice, setWrapDrivePrice] = useState("+0€");
  const [optionpackageprice, setOptionPackagePrice] = useState("+0€");
  const [totalprice, setTotalPrice] = useState("1200€");
  
   const [activeColorDivOne, setActiveColorDivOne] = useState(true)
   const [activeColorDivTwo, setActiveColorDivTwo] = useState(true)
   const [activeColorDivThree, setActiveColorDivThree] = useState(true)

   const [activePowerDivOne, setActivePowerDivOne] = useState(true)
   const [activePowerDivTwo, setActivePowerDivTwo] = useState(true)
   const [activePowerDivThree, setActivePowerDivThree] = useState(true)

      const [activeWrapDriveDivOne, setActiveWrapDriveDivOne] = useState(true)
   const [activeWrapDriveDivTwo, setActiveWrapDriveDivTwo] = useState(true)


    const [activeOptionPackageDivOne, setActiveOptionPackageDivOne] = useState(true)
   const [activeOptionPackageDivTwo, setActiveOptionPackageDivTwo] = useState(true)
   const [activeOptionPackageDivThree, setActiveOptionPackageDivThree] = useState(true)

  useEffect(() => {
    var price =
      parseInt("1000€") +
      parseInt(colorprice) +
      parseInt(powerprice) +
      parseInt(wrapdriveprice) +
      parseInt(optionpackageprice);

    setTotalPrice(price + "€");
    
     
    
  }, [colorprice, powerprice, wrapdriveprice, optionpackageprice]);

  const handleColorClickDivOne = (e) => {
    setColorPrice(e.target.title);
    setActiveColorDivTwo(true)
    setActiveColorDivThree(true)
     setActiveColorDivOne(!activeColorDivOne)


  };

  const handleColorClickDivTwo = (e)=>{
    setColorPrice(e.target.title);
    setActiveColorDivOne(true)
    setActiveColorDivThree(true)
    setActiveColorDivTwo(!activeColorDivTwo)
    
      
  }
  const handleColorClickDivThree = (e)=>{
    setColorPrice(e.target.title);
    setActiveColorDivOne(true)
    setActiveColorDivTwo(true)
     setActiveColorDivThree(!activeColorDivThree)
        
  }


  const handlePowerClickDivOne = (e) => {
    setPowerPrice(e.target.title);
       setActivePowerDivTwo(true)
    setActivePowerDivThree(true)
     setActivePowerDivOne(!activePowerDivOne)
  };
  const handlePowerClickDivTwo = (e) => {
    setPowerPrice(e.target.title);
      setActivePowerDivOne(true)
    setActivePowerDivThree(true)
    setActivePowerDivTwo(!activePowerDivTwo)
  };
  const handlePowerClickDivThree = (e) => {
    setPowerPrice(e.target.title);
      setActivePowerDivOne(true)
    setActivePowerDivTwo(true)
     setActivePowerDivThree(!activePowerDivThree)
  };

  const handleWrapDriveClickDivOne = (e) => {
    setWrapDrivePrice(e.target.title);
    setActiveWrapDriveDivTwo(true)
     setActiveWrapDriveDivOne(!activeWrapDriveDivOne)
  };
  const handleWrapDriveClickDivTwo = (e) => {
    setWrapDrivePrice(e.target.title);
      setActiveWrapDriveDivOne(true)
    setActiveWrapDriveDivTwo(!activeWrapDriveDivTwo)
  };

  const handleOptionPackageClickDivOne = (e) => {
    setOptionPackagePrice(e.target.title);
     setActiveOptionPackageDivTwo(true)
    setActiveOptionPackageDivThree(true)
     setActiveOptionPackageDivOne(!activeOptionPackageDivOne)
  };
  const handleOptionPackageClickDivTwo = (e) => {
    setOptionPackagePrice(e.target.title);
     setActiveOptionPackageDivOne(true)
    setActiveOptionPackageDivThree(true)
    setActiveOptionPackageDivTwo(!activeOptionPackageDivTwo)
  };
  const handleOptionPackageClickDivThree = (e) => {
    setOptionPackagePrice(e.target.title);
      setActiveOptionPackageDivOne(true)
    setActiveOptionPackageDivTwo(true)
     setActiveOptionPackageDivThree(!activeOptionPackageDivThree)
  };

  return (
    <>
      <div id="mainheading">Spaceship configurator</div>
      <div id="maindiv">
        <div id="PagePart1">
          <div id="heading1"> Select color:</div>
          <div id="SelectColor">
            <div id={activeColorDivOne? 'div1':'activediv1'} title="+0€" onClick={handleColorClickDivOne}>
              <div className="Sdiv1" title="+0€" onClick={handleColorClickDivOne}></div>
              <div className="Stext1" title="+0€" onClick={handleColorClickDivOne}>
                +0€
              </div>
              <div className="Stext11" title="+0€" onClick={handleColorClickDivOne}>
                Snow
              </div>
            </div>
            <div id={activeColorDivTwo? 'div12':'activediv12'} title="+100€" onClick={handleColorClickDivTwo}>
              <div
                className="Sdiv2"
                title="+100€"
                onClick={handleColorClickDivTwo}
              ></div>
              <div className="Stext1" title="+100€" onClick={handleColorClickDivTwo}>
                +100€
              </div>
              <div className="Stext11" title="+100€" onClick={handleColorClickDivTwo}>
                Volcano
              </div>
            </div>
            <div id={activeColorDivThree? 'div13':'activediv13'} title="+100€" onClick={handleColorClickDivThree}>
              <div
                className="Sdiv3"
                title="+100€"
                onClick={handleColorClickDivThree}
              ></div>
              <div className="Stext1" title="+100€" onClick={handleColorClickDivThree}>
                +100€
              </div>
              <div className="Stext11" title="+100€" onClick={handleColorClickDivThree}>
                Sky
              </div>
            </div>
          </div>
          {/* here we start Select power */}

          <div id="heading2">Select Power:</div>
          <div id="SelectPower">
            <div id={activePowerDivOne? 'div2':'activediv2'} title="+0€" onClick={handlePowerClickDivOne}>
              <div className="Stext2" title="+0€" onClick={handlePowerClickDivOne}>
                100 MW
              </div>
              <div className="Stext21" title="+0€" onClick={handlePowerClickDivOne}>
                +0€
              </div>
            </div>
            <div id={activePowerDivTwo? 'div22':'activediv22'} title="+200€" onClick={handlePowerClickDivTwo}>
              <div className="Stext2" title="+200€" onClick={handlePowerClickDivTwo}>
                150 MW
              </div>
              <div className="Stext21" title="+200€" onClick={handlePowerClickDivTwo}>
                +200€
              </div>
            </div>
            <div id={activePowerDivThree? 'div23':'activediv23'} title="+500€" onClick={handlePowerClickDivThree}>
              <div className="Stext2" title="+500€" onClick={handlePowerClickDivThree}>
                200 MW
              </div>
              <div className="Stext21" title="+500€" onClick={handlePowerClickDivThree}>
                +500€
              </div>
            </div>
          </div>

          {/* here we start Wrap drive */}
          <div id="heading3">Wrap drive:</div>
          <div id="Wrapdrive">
            <div id={activeWrapDriveDivOne? 'div3':'activediv3'} title="+0€" onClick={handleWrapDriveClickDivOne}>
              <div className="Stext3" title="+0€" onClick={handleWrapDriveClickDivOne}>
                NO
              </div>
              <div className="Stext31" title="+0€" onClick={handleWrapDriveClickDivOne}>
                +0€
              </div>
            </div>
            <div id={activeWrapDriveDivTwo? 'div32':'activediv32'} title="+1000€" onClick={handleWrapDriveClickDivTwo}>
              <div
                className="Stext3"
                id="+1000€"
                onClick={handleWrapDriveClickDivTwo}
              >
                YES
              </div>
              <div
                className="Stext31"
                id="+1000€"
                onClick={handleWrapDriveClickDivTwo}
              >
                +1000€
              </div>
            </div>
          </div>

          {/* here we start Select option package: */}
          <div id="heading4">Select option package:</div>
          <div id="OptionPackage">
            <div id={activeOptionPackageDivOne? 'div4':'activediv4'} title="+0€" onClick={handleOptionPackageClickDivOne}>
              <div
                className="Stext4"
                title="+0€"
                onClick={handleOptionPackageClickDivOne}
              >
                Basic
              </div>
              <div
                className="List1"
                title="+0€"
                onClick={handleOptionPackageClickDivOne}
              >
                <ul title="+0€" onClick={handleOptionPackageClickDivOne}>
                  <li title="+0€" onClick={handleOptionPackageClickDivOne}>
                    Air conditioning
                  </li>
                  <li title="+0€" onClick={handleOptionPackageClickDivOne}>
                    Cloth seats
                  </li>
                  <li title="+0€" onClick={handleOptionPackageClickDivOne}>
                    Fm radio
                  </li>
                </ul>
              </div>
            </div>

            <div id={activeOptionPackageDivTwo? 'div42':'activediv42'} title="+100€" onClick={handleOptionPackageClickDivTwo}>
              <div
                className="Stext4"
                title="+100€"
                onClick={handleOptionPackageClickDivTwo}
              >
                Sport
              </div>
              <div
                className="Stext41"
                title="+100€"
                onClick={handleOptionPackageClickDivTwo}
              >
                +100€
              </div>
              <div
                className="List2"
                title="+100€"
                onClick={handleOptionPackageClickDivTwo}
              >
                <ul title="+100€" onClick={handleOptionPackageClickDivTwo}>
                  <li title="+100€" onClick={handleOptionPackageClickDivTwo}>
                    Air conditioning
                  </li>
                  <li title="+100€" onClick={handleOptionPackageClickDivTwo}>
                    Cloth seats
                  </li>
                  <li title="+100€" onClick={handleOptionPackageClickDivTwo}>
                    Fm radio
                  </li>
                  <li title="+100€" onClick={handleOptionPackageClickDivTwo}>
                    Personal tech support
                  </li>
                </ul>
              </div>
            </div>
            <div id={activeOptionPackageDivThree? 'div43':'activediv43'} title="+500€" onClick={handleOptionPackageClickDivThree}>
              <div
                className="Stext4"
                title="+500€"
                onClick={handleOptionPackageClickDivThree}
              >
                Lux
              </div>
              <div
                className="Stext41"
                title="+500€"
                onClick={handleOptionPackageClickDivThree}
              >
                +500€
              </div>
              <div
                className="List3"
                title="+500€"
                onClick={handleOptionPackageClickDivThree}
              >
                <ul title="+500€" onClick={handleOptionPackageClickDivThree}>
                  <li title="+500€" onClick={handleOptionPackageClickDivThree}>
                    Air conditioning
                  </li>
                  <li title="+500€" onClick={handleOptionPackageClickDivThree}>
                    Luxury seats{" "}
                  </li>
                  <li title="+500€" onClick={handleOptionPackageClickDivThree}>
                    Fm radio
                  </li>
                  <li title="+500€" onClick={handleOptionPackageClickDivThree}>
                    Chrome weels{" "}
                  </li>
                  <li title="+500€" onClick={handleOptionPackageClickDivThree}>
                    {" "}
                    Window tint
                  </li>
                  <li title="+500€" onClick={handleOptionPackageClickDivThree}>
                    Subwoofer{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Page Part1 ending here */}
        {/* Page Part2 start here */}
        <div id="PagePart2">
          <div id="css">
            <div className="flexneed">
              <div className="totalhead">Base price:</div>
              <div className="totalprice">1000€</div>
            </div>
            <div className="flexneed">
              <div className="totalhead">Color:</div>
              <div className="totalprice">{colorprice}</div>
            </div>
            <div className="flexneed">
              <div className="totalhead">Power:</div>
              <div className="totalprice">{powerprice}</div>
            </div>
            <div className="flexneed">
              <div className="totalhead">Warp drive:</div>
              <div className="totalprice">{wrapdriveprice}</div>
            </div>
            <div className="flexneed">
              <div className="totalhead">Option package:</div>
              <div className="totalprice">{optionpackageprice}</div>
            </div>
            <hr></hr>
            <div className="flexneed">
              <div className="totalhead">Total:</div>
              <div className="totalprice">{totalprice}</div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* it is main div ending */}
    </>
  );
};

export default SpaceShip;
