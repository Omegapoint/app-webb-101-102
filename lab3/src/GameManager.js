
import MemoryBoard from './MemoryBoard';
import DomManager from './DomManager';

class GameManager {
    constructor({ gameElement, size }) {
        this.memoryBoard = new MemoryBoard(size, this.notifyAction);
        this.domManager = new DomManager({ node: gameElement, memoryBoard: this.memoryBoard });
    }

    start() {}

    notifyAction(action) {
      /*
      action structure:
      {
        type: 'ACTION_TYPE',
        data: {} (optional)
      */
        console.log("matched", action);
    }

    end() {}
}

export default GameManager;