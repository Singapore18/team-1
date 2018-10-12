import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { notebookNext, notebookPrev, notebookMove } from "actions";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import steppterStyles from "assets/jss/material-dashboard-react/components/stepperStyle.jsx";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Paper from "@material-ui/core/Paper";

class Steppter extends React.Component {
  state = {
    steps: this.props.steps,
    activeStep: this.props.step,
    completed: new Set(),
    skipped: new Set()
  };

  totalSteps = () => {
    return this.state.steps.length;
  };

  isStepOptional = step => {
    return step === 1;
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped
      };
    });
  };

  handleNext = () => {
    let activeStep;

    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed
      // find the first step that has been completed
      const steps = this.state.steps;
      activeStep = steps.findIndex((step, i) => !this.state.completed.has(i));
    } else {
      activeStep = this.props.step + 1;
    }
    this.props.notebookMove(activeStep);
  };

  handleBack = () => {
    this.props.notebookPrev();
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step
    });
  };

  handleComplete = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const completed = new Set(this.state.completed);
    completed.add(this.state.activeStep);
    this.setState({
      completed
    });

    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * `if (!this.allStepsComplete())` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
    if (completed.size !== this.totalSteps() - this.skippedSteps()) {
      this.handleNext();
    }
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: new Set(),
      skipped: new Set()
    });
  };

  skippedSteps() {
    return this.state.skipped.size;
  }

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  isStepComplete(step) {
    return this.state.completed.has(step);
  }

  completedSteps() {
    return this.state.completed.size;
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps() - this.skippedSteps();
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1;
  }

  render() {
    const { classes, steps, contents } = this.props;
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper
          className={classes.container}
          activeStep={this.props.step}
          orientation="vertical"
        >
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography color="textSecondary" className={classes.content}>
                    {contents[index]}
                  </Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={this.props.step === 0}
                        onClick={this.handleBack}
                        className={classes.backButton}
                      >
                        Back
                      </Button>
                      <Button
                        color="secondary"
                        variant="outlined"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

Steppter.propTypes = {
  classes: PropTypes.object,
  steps: PropTypes.array,
  contents: PropTypes.array,
  notebookNext: PropTypes.func.isRequired,
  notebookPrev: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  notebookMove: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  step: store.notebook
});
const mapDispatchToProps = dispatch => ({
  notebookNext: () => dispatch(notebookNext()),
  notebookPrev: () => dispatch(notebookPrev()),
  notebookMove: page => dispatch(notebookMove(page))
});
export default compose(
  withStyles(steppterStyles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Steppter);
