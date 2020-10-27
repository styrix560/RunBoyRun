export class Player {

    constructor(x, y, width, height, isGrounded) {

        this.x = x;
        this.y = y;
        this.xvel = 0;
        this.yvel = 0;
        this.width = width;
        this.height = height;
        this.isGrounded = isGrounded;
        this.speed = 0.3;
        this.friction = 0.25;

    }

    update = (ground, scrollSpeed) => {

        this.updateIsGrounded(ground.height);
        
        this.updateVelocity();

        this.updateCoordinates(scrollSpeed);

        this.updateImage();

    }

    updateIsGrounded = (height) => {

        if (this.jumped) {

            this.isGrounded = false;
            this.jumped = false;

        } else {

            this.isGrounded = this.y >= 600 - height;

        }

    }

    updateVelocity = () => {

        if (Math.abs(this.xvel) >= this.friction) {

            if (this.xvel > 0) {

                this.xvel -= this.friction;

            } else {

                this.xvel += this.friction;

            }
            
        } else if (Math.abs(this.xvel) <= 0.1) {

            this.xvel = 0;

        } else {

            this.xvel -= 0.1;

        }

        if (!this.isGrounded) {

            this.yvel += 0.1;

        } else {

            this.yvel = 0;

        }

    }

    updateCoordinates = (scrollSpeed) => {

        if (this.x >= scrollSpeed) {

            this.x -= scrollSpeed;

        }

        if (this.x > -this.xvel 
            && this.x < 800 - this.xvel - this.width) {

            this.x += this.xvel;

        }

        this.y += this.yvel;

    }

    updateImage = () => {

        this.image.x = this.x;
        this.image.y = this.y;

    }

    onSpaceDown = () => {
       
        if (this.isGrounded) {

            this.jumped = true;
            this.yvel = -5;

        }

    }

    onLeftKeyDown = () => {

        this.xvel -= this.speed;

    }

    onRightKeyDown = () => {

        this.xvel += this.speed;

    }

}
