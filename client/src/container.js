import { connect } from 'react-redux';
import HomeComponent from './components/Trademarks/HomeComponent';
import FormComponent from './components/Trademarks/FormComponent';

const mapStateToProps = state => {
    return {
      lang: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
      setLanguage: (ln) => dispatch({ type: `${ln}` })
    }
  };
  
export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export const FormContainer = connect(mapStateToProps, mapDispatchToProps)(FormComponent);