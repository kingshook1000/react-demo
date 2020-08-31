import React, {Component} from 'react';

class Ninjas extends Component
{
  render(){
    //destructuring demo
    const {ninjas} = this.props;
    const ninjaList = ninjas.map(ninja => {
        const {name, age, hobby} = ninja;
        return (
            <div className="ninja" key={name}>
                <div>Name: {name}</div>
                <div>Age: {age}</div>
            <div>Hobby: {hobby}</div>
        </div>
        )
    })
    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
  }
}

export default Ninjas;