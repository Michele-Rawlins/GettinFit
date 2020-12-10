import PropTypes from 'prop-types';

const mealShape = PropTypes.shape({
mealId:PropTypes.number.isRequired,
foodDescription: PropTypes.string.isRequired,
calorieCount: PropTypes.string.isRequired,
whichMeal: PropTypes.string.isRequired,
date: PropTypes.string.isRequired,
userId: PropTypes.number.isRequired,

});

export default { mealShape }