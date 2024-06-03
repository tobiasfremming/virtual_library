import React from "react";

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempora nemo et, sequi fuga voluptatibus praesentium ab ipsa ea sapiente cupiditate ipsam velit veniam eligendi, dolore voluptate consectetur aliquam odio, modi libero quam ipsum officia beatae quidem? Sunt at consequatur natus illum quia libero? Accusamus eveniet veritatis nemo provident repudiandae soluta at, magnam commodi. Dolore temporibus esse obcaecati laborum reiciendis nihil inventore ad quod, unde corporis necessitatibus architecto laboriosam saepe dolores animi quidem tenetur recusandae at ipsam eos perferendis nostrum quisquam? Amet, repellendus minus iure vitae impedit nihil dolor perspiciatis ullam doloribus! Doloremque dolore voluptatibus libero, illum labore culpa! Esse.";

const makeBionic = (text: string): string => {
  let htmlString = "<div>";
  const wordList: string[] = text.split(" ");
  for (let i = 0; i < wordList.length; i++) {
    // add a bold tag around the first 3 letters of each word
    const word = wordList[i];
    const boldedWord =
      "<b>" + word.substring(0, 3) + "</b>" + word.substring(3);
    htmlString += boldedWord + " ";
  }

  htmlString += "</div>";
  return htmlString;
};

const Bionic = () => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: makeBionic(text) }} />
    </div>
  );
};

export default Bionic;
