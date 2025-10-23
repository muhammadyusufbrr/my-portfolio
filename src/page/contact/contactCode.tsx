// import React from "react";

// const ContactCode = () => {
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>1</th>
//             <th>2</th>
//             <th>3</th>
//             <th>4</th>
//             <th>5</th>
//             <th>6</th>
//             <th>7</th>
//             <th>8</th>
//             <th>9</th>
//             <th>10</th>
//             <th>11</th>
//             <th>12</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <span className="">const</span> <span>button</span> <span>=</span>{" "}
//               <span>document</span><span>.</span><span>querySelector</span><span>{"("}</span><span>{"'#sendBtn'"}</span><span>{");"}</span>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ContactCode;

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const code = `const button = document.querySelector('#sendBtn');

const message = {
	name: "Jonathan Davis",
	email: "jonathan-davis@gmail.com",
	message: "${"Salom"}",
	date: "Thu 21 Apr"
}

button.addEventListener('click', () => {
	form.send(message);
});
`;

export const CodeSnippet = () => (
  <SyntaxHighlighter
    language="javascript"
    style={oneDark}
    showLineNumbers
    // customStyle={{
    //   background: "transparent",
    //   padding: "16px",
    //   fontSize: "18px",
    //   lineHeight: "1.6",
    // }}
    codeTagProps={{
      style: { background: "transparent",fontSize:"18px" },
    }}
  >
    {code}
  </SyntaxHighlighter>
);
