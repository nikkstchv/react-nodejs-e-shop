import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../actions/filter';
import Filter from '../components/Filter';

const mapStateToProps = ({ books, filter }) => ({
  filterBy: filter.filterBy,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(filterActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);

// 1. Приложение получило изначальное состояние (initial state)
// 2. Пользователь нажав кнопку, отправил действие (dispatch action)
// 3. Соответсвующий редьюсер обновил часть приложения, в согласии с тем, что узнал от действия.
// 4. Приложение изменилось и теперь отражает новое состояние.
// ... (все повторяется по кругу, с пункта 2)