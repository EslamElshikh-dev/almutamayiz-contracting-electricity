import Link from "next/link";
import { ArrowLeft, HardHat } from "lucide-react";

export default function NotFound(){return <main className="not-found"><div><span><HardHat className="h-9 w-9"/></span><strong>404</strong><h1>هذه الصفحة ليست ضمن المخطط</h1><p>ربما تغيّر الرابط أو انتقلت الخدمة إلى صفحة أخرى.</p><Link href="/">العودة إلى الرئيسية <ArrowLeft className="h-4 w-4"/></Link></div></main>}
