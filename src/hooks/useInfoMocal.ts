import { create } from "zustand";

interface ModalStoreInterface {
  isOpen: boolean;
  gameId?: string;
  openModal: (gameId: string) => void;
  closeModal: () => void;
}
const useInfoModal = create<ModalStoreInterface>((set) => ({
  isOpen: false,
  gameId: undefined,
  openModal: (gameId: string) => set({ isOpen: true, gameId }),
  closeModal: () => set({ isOpen: false, gameId: undefined }),
}));

export default useInfoModal;
