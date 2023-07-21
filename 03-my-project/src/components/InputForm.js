import { useState } from "react";
import InputBox from "./InputBox";
import styles from "./InputForm.module.css";
const InputForm = (props) => {
    const [currentSavings, setCurrentSavings] = useState('');
    const [yearlyContribution, setYearlyContribution] = useState('');
    const [expectedReturn, setExpectedReturn] = useState('');
    const [duration, setDuration] = useState('');
    const currentSavingsChangeHandler = (value) => setCurrentSavings(value);
    const yearlyContributionChangeHandler = (value) => setYearlyContribution(value);
    const expectedReturnChangeHandler = (value) => setExpectedReturn(value);
    const durationChangeHandler = (value) => setDuration(value);

    const resetFormHandler = () => {
        setCurrentSavings('');
        setYearlyContribution('');
        setExpectedReturn('');
        setDuration('');
        props.onSubmit({});
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        const input = {
            "current-savings": currentSavings,
            "yearly-contribution": yearlyContribution,
            "expected-return": expectedReturn,
            "duration": duration
        }
        props.onSubmit(input);

        
    }
	return (
		<form className={styles.form} onSubmit={submitFormHandler} onReset={resetFormHandler}>
			<div className={styles["input-group"]}>
				<InputBox
					id="current-savings"
					labelText="Current Savings ($)"
                    onChangeHandler={currentSavingsChangeHandler}
                    value={currentSavings}
				/>
				<InputBox
					id="yearly-contribution"
					labelText="Yearly Savings ($)"
                    onChangeHandler={yearlyContributionChangeHandler}
                    value={yearlyContribution}
				/>
			</div>
			<div className={styles["input-group"]}>
				<InputBox
					id="expected-return"
					labelText="Expected Interest (%, per year)"
                    onChangeHandler={expectedReturnChangeHandler}
                    value={expectedReturn}
				/>
				<InputBox
					id="duration"
					labelText="Investment Duration (years)"
                    onChangeHandler={durationChangeHandler}
                    value={duration}
				/>
			</div>
			<p className={styles.actions}>
				<button type="reset" className={styles.buttonAlt}>
					Reset
				</button>
				<button type="submit" className={styles.button}>
					Calculate
				</button>
			</p>
		</form>
	);
};

export default InputForm;
