import { Component } from "react";

export class NoteCard extends Component{
  render(){
    return <div key={this.props.id} className="mb-4 p-4 bg-white shadow-lg h-[220px] rounded-2xl">
    <h3 className="mb-2 text-2xl font-bold text-gray-800">{this.props.title}</h3>
    <p className="text-gray-600">{this.props.body}</p>
  </div>
  }
}