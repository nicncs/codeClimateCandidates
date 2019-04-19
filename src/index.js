import Main from "./Main"
import React, { Component } from "react"
import ReactDOM from "react-dom"

import './css/main.css'

const rootElem = document.getElementById("root")
rootElem?ReactDOM.render(<Main />, rootElem) : false