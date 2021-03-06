import { useState } from "react";

export const useMail = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const Submit = async () => {
    await fetch("/api/mail", {
      method: "POST",
      body: `
名前
${name}

メール
${mail}

お問い合わせ内容
${message}
`,
    });
  };

  return {
    mail,
    setName,
    setMail,
    setMessage,
    Submit,
  };
};
