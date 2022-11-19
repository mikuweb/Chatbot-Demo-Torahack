import { Divider } from "@material-ui/core";
import { useEffect, useState } from "react";
import defaultDataset from "./dataset.js";
import "./assets/styles/style.css";
import { AnswersList } from "./components/index";

const App = (props) => {
  const [answers, setAnswers] = useState(defaultDataset.init.answers); // 回答componentに表示するデータ
  const [chats, setChats] = useState([]); // チャットcomponentに表示するデータ
  const [currentId, setCurrentId] = useState("init"); // 現在の質問ID
  const [dataset, setDataset] = useState(defaultDataset); // 質問と回答のデータセット
  const [open, setOpen] = useState(false); // 問い合わせフォーム用モーダルの開閉を管理

  // const initDataset = dataset[currentId];
  // const initAnswers = initDataset.answers;

  // useEffect(() => {
  //   setAnswers(initAnswers);
  // }, []);

  return (
    <div>
      <section className="c-section">
        <div className="c-box">
          <AnswersList answers={answers} />
        </div>
      </section>
    </div>
  );
};

export default App;
