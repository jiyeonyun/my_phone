import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    componentDidMount(){
        console.log(`habit:${this.props.habit.name} mounted`);
    }//ui상 등록이 되었을때 
    componentWillUnmount(){
        console.log(`habit:${this.props.habit.name} unmounted`);
    }//ui상 삭제가 되었을때 지우기전에 호출됨 ex)정리
    
    handleIncrement = () =>{
        this.props.onIncrement(this.props.habit);
    };
    handleDecrement = () =>{
        this.props.onDecrement(this.props.habit);
    };
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    render() {
        const {name, count} = this.props.habit

        return (
            <li className='habit'>
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className='habit-button habit-increase' onClick={this.handleIncrement}>
                    <i className='fas fa-plus-square'></i>
                </button>
                <button className='habit-button habit-decrease' onClick={this.handleDecrement}>
                    <i className='fas fa-minus-square'></i>
                </button>
                <button className='habit-button habit-delete' onClick={this.handleDelete}>
                    <i className='fas fa-trash'></i>
                </button>
            </li>
            
        );
    }
}

export default Habit;