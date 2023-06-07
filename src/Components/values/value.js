import React, { useState, useEffect } from "react";
import "./value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../utils/accordion";

function Value() {
  const [className, setClassName] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (expanded) {
      setClassName("expanded");
    } else {
      setClassName("collapsed");
    }
  }, [expanded]);

  return (
    <section className="v-wraper">
      <div className="flexCenter paddings innerWidth v-container">
      <div class="v-left flexCenter paddings innerWidth">
  <div class="image-container">
    <img src="./value.png" alt="value" width="515" borderRadius="1px solid red" />
  </div>
</div>

        <div className="v-right">
          <div className="orangeText ">Our Value</div>
          <div className="primaryText">Value We Give To You</div>
          <span className="secondaryText">
            We always readyto help by by providing the best servies
            <br />
            We believ a good blaceto live can make your life better
          </span>
          <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map((item, i) => {
              return (
                <AccordionItem
                  className={`accordion-item${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionbutton">
                      <AccordionItemState>
                        {({expanded}) =>
                          expanded ? setClassName("expanded") : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon" >{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexcenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText ">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div> 
      </div>
    </section>
  );
}

export default Value;
