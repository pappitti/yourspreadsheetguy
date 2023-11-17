import './App.css';
import ChatInterface from './components/ChatInterface';

function App() {
    return (
      <div className="flex flex-col h-screen">
        <div className="p-4 text-3xl text-white font-bold bg-blue-600">Your Spreadsheet Guy</div>
        <div className="flex-grow overflow-auto">
          <ChatInterface />
        </div>
        <div className="p-4 w-full text-white bg-gray-800 text-center">
          <a href="https://github.com/pappitti/yourspreadsheetguy" target="_blank">github repo</a>
        </div>
      </div>
    );
}

export default App;
