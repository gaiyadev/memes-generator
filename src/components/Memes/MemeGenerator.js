import React, { Component } from "react";
import InputField from '../../components/InputField/InputField';

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            font_size: "22",
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        };
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    handleClick = () => {
        if (this.state.font_size && this.state.topText && this.state.bottomText) {
            let randomNumber = Math.floor(
                Math.random() * this.state.allMemeImgs.length
            );
            this.setState({
                randomImg: this.state.allMemeImgs[randomNumber].url
            });
        } else {
            return;
        }

    };
    increaseFont = () => { };
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(data => data.json())
            .then(response => {
                const { memes } = response.data;
                this.setState({
                    allMemeImgs: memes
                });
            });
    }
    render() {
        console.log(this.state.font_size);
        return (
            <div>
                <InputField change={this.handleChange}
                    btnValue={this.state.bottomText}
                    topValue={this.state.topText}
                    textValue={this.state.font_size}
                    click={this.handleClick} />
                <div className="meme">
                    <h2
                        style={{ fontSize: Number(this.state.font_size) }}
                        className="top"
                    >
                        {this.state.topText}
                    </h2>
                    <img src={this.state.randomImg} alt="" />
                    <h2
                        style={{ fontSize: Number(this.state.font_size) }}
                        className="bottom"
                    >
                        {this.state.bottomText}
                    </h2>
                </div>
            </div>
        );
    }
}

export default MemeGenerator;