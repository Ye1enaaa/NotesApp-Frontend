import { Component } from "react";

export class NoteCard extends Component{
  render(){
    return <div key={this.props.id} className={`mb-4 p-4 ${this.props.bgColor} shadow-lg h-[220px] rounded-2xl`}>
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm text-gray-600">{this.props.date_created}</span>
      <button className="text-gray-600 hover:text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </button>
    </div>
    <h3 className="mb-2 text-2xl font-bold text-gray-800">{this.props.title}</h3>
    <p className="text-gray-600">{this.props.body}</p>
    <div className="flex items-center mt-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
      </svg>
      <span className="ml-2 text-sm text-gray-600">10:30 PM, Monday</span>
    </div>
  </div>  
  }
}