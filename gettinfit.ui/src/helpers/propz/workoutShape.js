import PropTypes from 'prop-types';

const workoutShape = PropTypes.shape({
workoutId:PropTypes.number.isRequired,
exerciseName: PropTypes.string.isRequired,
reps: PropTypes.string.isRequired,
sets: PropTypes.string.isRequired,
weight: PropTypes.string.isRequired,
date: PropTypes.string.isRequired,
bodyPart: PropTypes.string.isRequired,
caloriesBurned: PropTypes.string.isRequired,
userId: PropTypes.number.isRequired,

});

export default { workoutShape }
