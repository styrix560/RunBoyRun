export class Player {

    constructor(x, y, width, height, isGrounded) {

        this.x = x;
        this.y = y;
        this.xvel = 0;
        this.yvel = 0;
        this.width = width;
        this.height = height;
        this.isGrounded = isGrounded;

    }

    update = (ground) => {

        this.updateIsGrounded(ground.height);

        this.updateYVelocity();

        this.updateY();

        this.updateImageY();

    }

    updateIsGrounded = (height) => {

        if (this.jumped) {

            this.isGrounded = false;
            this.jumped = false;

        } else {

            this.isGrounded = this.y >= 600 - height;

        }

    }

    updateYVelocity = () => {

        if (!this.isGrounded) {

            this.yvel += 0.1;

        } else {

            this.yvel = 0;

        }

    }

    updateY = () => {

        this.y += this.yvel;

    }

    updateImageY = () => {

        this.image.y = this.y

    }

    onSpaceDown = () => {

        console.log(this.isGrounded);
       
        if (this.isGrounded) {

            this.jumped = true;
            this.yvel = -5;

        }

    }

}