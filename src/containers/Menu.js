import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import Menu from '../components/Menu';
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
  count: cart.items.length,
  items: uniqBy(cart.items, o => o.id),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);

// 1. Приложение получило изначальное состояние (initial state)
// 2. Пользователь нажав кнопку, отправил действие (dispatch action)
// 3. Соответсвующий редьюсер обновил часть приложения, в согласии с тем, что узнал от действия.
// 4. Приложение изменилось и теперь отражает новое состояние.
// ... (все повторяется по кругу, с пункта 2)