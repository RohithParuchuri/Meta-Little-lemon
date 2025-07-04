import React from 'react'
import Card from './card'
import styles from './CardGroup.module.css'

const CardGroup = React.forwardRef((props, ref) => {
    const [showDialog, setShowDialog] = React.useState(false);
    const handlePeopleLimit = () => setShowDialog(true);
    return (
        <div className={styles.colorContainer} ref={ref}>
            <h1 className={styles.heading}>Today's Specials</h1>
            <div className={styles.container}>
                <Card
                    heading="Salad"
                    desc="The famous Greek salad of crispy lettuce, peppers, olives and our Chicago..."
                    price={12.99}
                    onPeopleLimit={handlePeopleLimit}
                />
                <Card
                    heading="Brushetta"
                    desc="Our Bruschetta is made from grilled bread that has been smeared with garl..."
                    price={7.99}
                    onPeopleLimit={handlePeopleLimit}
                />
                <Card
                    heading="Grilled Fish"
                    desc="Our grilled fish is perfectly seasoned and flame-cooked to bring out its natural flavors"
                    price={16.79}
                    onPeopleLimit={handlePeopleLimit}
                />
                <Card
                    heading="Pasta"
                    desc="Classic Mediterranean-style pasta tossed in a rich tomato and basil sauce, topped with parmesan"
                    price={18.99}
                    onPeopleLimit={handlePeopleLimit}
                />
                <Card
                    heading="Lamb Kebab"
                    desc="Tender pieces of lamb skewered and grilled with Mediterranean spices"
                    price={20.49}
                    onPeopleLimit={handlePeopleLimit}
                />
                <Card
                    heading="Stuffed Grape Leaves"
                    desc="Grape leaves filled with rice, pine nuts, and herbs — a traditional Mediterranean favorite"
                    price={9.49}
                    onPeopleLimit={handlePeopleLimit}
                />
            </div>
            <button className={styles.btn}>Order Now</button>
            {showDialog && (
                <div className="reserve-dialog">
                    <div className="reserve-dialog-content">
                        <p>Can't add more than 4 people per table.</p>
                        <button onClick={() => setShowDialog(false)}>OK</button>
                    </div>
                </div>
            )}
        </div>
    )
});

export default CardGroup