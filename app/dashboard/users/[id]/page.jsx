import Image from "next/image";
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css";
import { fetchUser } from "../../../lib/data";
import { updateUser } from "../../../lib/actions";

const SingleUserPage = async ({ params }) => {
  const { id } = params;

  const user = await fetchUser(id);

  console.log(user);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={user.img || "/noavatar.png"}
            alt="user"
            fill
            sizes="100%"
          />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user._id.toString()} />
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea name="address" placeholder={user.address} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin" defaultValue={user.isAdmin}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive" defaultValue={user.isAdmin}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button type="submit" className={styles.button}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
