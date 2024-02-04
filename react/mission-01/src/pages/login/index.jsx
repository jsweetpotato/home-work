import React from "react";
import { Fragment } from "react";
import { ButtonMain } from "../../components/ButtonMain";
import { TextInput } from "../../components/TextInput";
import { Textarea } from "../../components/TextArea";

const saveBtn = {
  primary: true,
  onClick() {
    console.log("save");
  },
  text: "저장",
  isValid: true,
};

const cancelBtn = {
  onClick() {
    console.log("cancel");
  },
  text: "취소",
  isValid: true,
};

export const Login = () => {
  return (
    <div style={{ flexBasis: "100%", display: "flex", flexDirection: "column" }}>
      <TextInput
        id={"이름인풋"}
        label={"이름(별명)"}
        text="이름이나 별명을 입력해주세요"
        max={8}
        ariaLabel={"이름, 별명 입력칸"}
      />
      <TextInput
        id={"직업인풋"}
        label={"직업"}
        text="어떤일을 하시는지 알려주세요."
        max={24}
        ariaLabel={"직업 입력칸"}
      />
      <TextInput id={"직장인풋"} label={"직장"} text="일하시는 곳을 알려주세요." max={24} ariaLabel={"직장 입력칸"} />
      <Textarea
        id={"자기소개인풋"}
        label={"자기소개"}
        text="어떤 취미 생활이 있는지, 무엇을 좋아하는지 등 자신있게 소개해주세요(상세하게 적으시면 소통에 도움이 됩니다)."
        max={500}
        ariaLabel={"자기소개 입력칸"}
      />
      <div style={{ display: "flex", width: "100%", gap: "8px", marginTop: "auto" }}>
        <ButtonMain {...saveBtn} />
        <ButtonMain {...cancelBtn} />
      </div>
      <span style={{ textAlign: "center", color: "#919191", fontSize: "14px", marginBlock: "12px 48px" }}>
        정보 초기화 및 이용동의 철회
      </span>
    </div>
  );
};
