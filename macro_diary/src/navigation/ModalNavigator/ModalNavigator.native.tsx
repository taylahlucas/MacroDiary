import Condition from '../../components/general/Condition.native';
import useMainState from '../../redux/hooks/useMainState.native';
import AddRecipeModal from '../../screens/AddRecipeModal.native';

const ModalNavigator = () => {
  const { showAddRecipeModal } = useMainState();
  
  return (
    <Condition condition={showAddRecipeModal}>
      <AddRecipeModal />
    </Condition>
  );
};

export default ModalNavigator;