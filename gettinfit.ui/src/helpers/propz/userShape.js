import PropTypes from 'prop-types';

const userShape = PropTypes.shape({
userId:PropTypes.number.isRequired,
firstName: PropTypes.string.isRequired,
lastName: PropTypes.string.isRequired,
email: PropTypes.string.isRequired,
sex: PropTypes.string.isRequired,
height: PropTypes.string.isRequired,
currentWeight: PropTypes.string.isRequired,
age: PropTypes.string.isRequired,
imageUrl: PropTypes.string.isRequired,
birthDate: PropTypes.string.isRequired,
calorieGoal: PropTypes.string.isRequired,
weightGoal: PropTypes.string.isRequired,
beginningWeight: PropTypes.string.isRequired,
dateCreated: PropTypes.string.isRequired,

});

export default { userShape }