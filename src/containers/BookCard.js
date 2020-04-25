import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import BookCard from '../components/BookCard';

const mapStateToProps = ({ cart }, { id }) => ({
  addedCount: cart.items.reduce((count, book) => count + (book.id === id ? 1 : 0), 0),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookCard);

// 1. Приложение получило изначальное состояние (initial state)
// 2. Пользователь нажав кнопку, отправил действие (dispatch action)
// 3. Соответсвующий редьюсер обновил часть приложения, в согласии с тем, что узнал от действия.
// 4. Приложение изменилось и теперь отражает новое состояние.
// ... (все повторяется по кругу, с пункта 2)