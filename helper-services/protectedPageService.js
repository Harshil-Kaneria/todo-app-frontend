import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ProtectedPageService = () => {
  
const router = useRouter();
  const path = usePathname();
  const userAuth = useSelector((state) => state?.persistedReducer?.user?.auth);

  const afterLoginProtectedPages = ["/"];
  const afterLoginNotAccessiblePages = ["/login", "/register"];

  useEffect(() => {
    
    if (afterLoginProtectedPages.includes(path) && !userAuth) {
      router.push("/login");
    }

    if (afterLoginNotAccessiblePages.includes(path) && userAuth) {
      router.push("/");
    }

  }, [userAuth, path]);

  return null;
};

export default ProtectedPageService;
