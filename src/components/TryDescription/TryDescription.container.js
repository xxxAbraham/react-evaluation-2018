import { connect } from 'react-redux'
import TryDescription from './TryDescription'
import { rulesLoaded } from '../../store/actions/rules'

const mapStateToProps = state => ({
  rules: state.rules,
})

const mapDispatchToProps = dispatch => ({
  loadRules: () => dispatch(rulesLoaded()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TryDescription)