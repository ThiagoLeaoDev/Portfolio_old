import * as SC from "./style";
import { BiLayout, BiCodeBlock, BiMobile, BiRocket } from "react-icons/bi";

export default function index(props) {
  return (
    <SC.ContainerCard>
      <SC.ContainerImage>
        <SC.ProjectImage
          src={props.image}
          alt="Project Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </SC.ContainerImage>

      <SC.CardText>
        <SC.Title>{props.Title}</SC.Title>
        <SC.ContainerTypeProject>
          {props.Type == "code" ? (
            <BiCodeBlock size="1.5em" color="#13FF00" />
          ) : props.Type == "ui" ? (
            <BiLayout size="1.5em" color="#13FF00" />
          ) : props.Type == "mobile" ? (
            <BiMobile size="1.5em" color="#13FF00" />
          ) : props.Type == "social" ? (
            <BiRocket size="1.5em" color="#13FF00" />
          ) : null}
          <SC.TypeName>
            {props.Type == "code"
              ? "Web Development"
              : props.Type == "ui"
              ? "UI Design"
              : props.Type == "mobile"
              ? "Mobile Development"
              : props.Type == "social"
              ? "Social Media Design"
              : null}
          </SC.TypeName>
        </SC.ContainerTypeProject>
      </SC.CardText>

      <SC.ContainerButtons>
        {props.Type == "ui" || props.Type == "social" ? (
          <SC.ButtonLive href={"https://www.figma.com/file/" + props.id} target="_blank">
            <SC.ButtonTextLive>See Project</SC.ButtonTextLive>
          </SC.ButtonLive>
        ) : (
          <>
            <SC.ButtonView target="_blank">
              <SC.ButtonTextView>View Code</SC.ButtonTextView>
              <SC.ArrowIcon size="1.5em" color="#FFFFFF" />
            </SC.ButtonView>
            <SC.ButtonLive target="_blank">
              <SC.ButtonTextLive>Live Preview</SC.ButtonTextLive>
            </SC.ButtonLive>
          </>
        )}
      </SC.ContainerButtons>
    </SC.ContainerCard>
  );
}
