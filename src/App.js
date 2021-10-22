import { useState, } from "react";
import "./App.css";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";


export default function App() {


    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const options = { good, neutral, bad }
    const btnHandler = (e) => {
        e.preventDefault();
        const name = e.target.name;
        switch (name) {
            case 'good': setGood(good + 1)
                break;
            case 'neutral': setNeutral(neutral + 1);
                break;
            case 'bad': setBad(bad + 1);
                break;
            default: return
        }


    };

    const totalFeedbacks = () => {
        return good + neutral + bad;
    };

    const percents = () => {
        const goodViews = (good / totalFeedbacks()) * 100;
        return Math.round(goodViews);
    };
    return (
        <div className="app">
            <Section
                title={"Give us your feedback"}
                children={
                    <FeedbackOptions
                        options={Object.keys(options)}
                        click={btnHandler}
                    ></FeedbackOptions>
                }
            ></Section>
            {totalFeedbacks() > 0 ? (
                <Section
                    title={"Our Statistics"}
                    children={
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={totalFeedbacks()}
                            percentsApproving={percents()}
                        ></Statistics>
                    }
                ></Section>
            ) : (
                <Notification message={"Rate Us!"}></Notification>
            )}
        </div>
    );
}