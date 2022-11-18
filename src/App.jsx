import { Divider } from "@material-ui/core";
import { useState } from "react";
import defaultDataset from "./dataset";
import "./assets/styles/style.css";

const App = () => {
  const [answers, setAnswers] = useState([]); // 回答componentに表示するデータ
  const [chats, setChats] = useState([]); // チャットcomponentに表示するデータ
  const [currentId, setCurrentId] = useState("init"); // 現在の質問ID
  const [dataset, setDataset] = useState(defaultDataset); // 質問と回答のデータセット
  const [open, setOpen] = useState(false); // 問い合わせフォーム用モーダルの開閉を管理

  return (
    <div>
      <section className="c-section">チャット</section>
    </div>
  );
};

export default App;
