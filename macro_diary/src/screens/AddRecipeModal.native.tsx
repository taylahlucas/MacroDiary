import React from 'react';
import { Modal } from 'react-native';
import AddRecipeContent from '@components/custom/AddRecipeContent/AddRecipeContent.native';
import { BackdropView } from '@components/general/Backdrop/BackdropStyledComponents.native';

const AddRecipeModal = () => {  // TODO: Swipe down to close
  return (
    <Modal 
      animationType="fade"
      transparent={true}
    >
      <BackdropView>
        <AddRecipeContent />
      </BackdropView>
    </Modal>
  )
};

export default AddRecipeModal;