// KIIP grammatika — mock testlardagi barcha grammatik shakllar, mavzu bo'yicha.
// Har bir qoida: form (shakl), meaning (ma'no), usage (qo'shilish qoidasi),
// ex (misollar: ko koreyscha + uz o'zbekcha), tip (muhim eslatma, ixtiyoriy).
window.GRAMMAR_SETS = [
  {
    id:"g1",
    title:"이유·원인 (Sabab bildiruvchi)",
    items:[
      {form:"-아/어서",
       meaning:"...gani uchun, chunki — sabab yoki ketma-ketlik",
       usage:"Fe'l/sifat asosiga qo'shiladi. Buyruq (-으세요) va taklif (-읍시다) bilan ISHLATILMAYDI.",
       ex:[
         {ko:"비가 와서 집에 있었어요.", uz:"Yomg'ir yoqqani uchun uyda qoldim."},
         {ko:"반대 방향 버스를 타서 늦었어요.", uz:"Teskari tomon avtobusiga o'tirib qolgani uchun kechikdim."}
       ],
       tip:"❌ 비가 와서 집에 계세요 (buyruq bilan bo'lmaydi) → ✅ 비가 오니까 집에 계세요"},
      {form:"-(으)니까",
       meaning:"...gani uchun — sabab (buyruq/taklif bilan ham ishlatiladi)",
       usage:"Buyruq, taklif, iltimosga sabab keltirilganda -아/어서 o'rniga shu ishlatiladi.",
       ex:[
         {ko:"길이 막히니까 지하철을 타세요.", uz:"Yo'l tirband, shuning uchun metroda boring."},
         {ko:"날씨가 추우니까 옷을 따뜻하게 입으세요.", uz:"Havo sovuq, iliq kiyining."}
       ]},
      {form:"-기 때문에",
       meaning:"...gani sababli — kuchli, rasmiy sabab",
       usage:"Fe'l/sifat + 기 때문에. Ot + 때문에. Ko'pincha salbiy yoki jiddiy sababda.",
       ex:[
         {ko:"길이 막혔기 때문에 회의에 늦었어요.", uz:"Yo'l tirband bo'lgani sababli yig'ilishga kechikdim."},
         {ko:"감기 때문에 학교에 못 갔어요.", uz:"Shamollash tufayli maktabga bora olmadim."}
       ]},
      {form:"-느라고",
       meaning:"...bilan ovora bo'lib (shu sababli boshqa ish qilinmadi)",
       usage:"Faqat fe'l bilan. Natija odatda SALBIY (biror ishni qilolmadi). Ega bir xil bo'lishi kerak.",
       ex:[
         {ko:"게임을 하느라고 숙제를 못 했어요.", uz:"O'yin o'ynash bilan ovora bo'lib uy vazifasini qilolmadim."},
         {ko:"면접을 준비하느라고 친구도 못 만났어요.", uz:"Suhbatga tayyorlanish bilan bo'lib do'stim bilan ham ko'risholmadim."}
       ]},
      {form:"-더니 / -았·었더니",
       meaning:"...gan edi, keyin (kuzatilgan sabab-natija)",
       usage:"-더니 = 3-shaxs (boshqa odam). -았/었더니 = 1-shaxs (men o'zim qilgach natija).",
       ex:[
         {ko:"동생이 열심히 공부하더니 시험에 합격했어요.", uz:"Ukam qattiq o'qigan edi, imtihondan o'tdi."},
         {ko:"제가 운동을 했더니 몸이 가벼워졌어요.", uz:"Men sport bilan shug'ullandim-u, tanam yengil bo'ldi."}
       ],
       tip:"1-shaxs bilan albatta -았/었더니 (❌ 제가 운동하더니)"},
      {form:"-아/어서 그런지",
       meaning:"...gani uchunmi, harqalay (aniq bo'lmagan sababni taxmin qilish)",
       usage:"Sabab aniq emas, 'ehtimol shu sababdandir' degan taxmin.",
       ex:[
         {ko:"연휴라서 그런지 기차표가 다 팔렸어요.", uz:"Bayram sababmi, poyezd chiptalari sotilib bo'libdi."},
         {ko:"봄이라서 그런지 자꾸 졸려요.", uz:"Bahor sababmi, doim uyqu bosaveradi."}
       ]},
      {form:"덕분에 / 바람에 / 때문에",
       meaning:"tufayli — natijaga qarab tanlanadi",
       usage:"덕분에 = IJOBIY natija. 바람에 = kutilmagan/SALBIY natija. 때문에 = odatda salbiy.",
       ex:[
         {ko:"친구들이 도와준 덕분에 성공했어요.", uz:"Do'stlar yordami tufayli muvaffaq bo'ldim. (ijobiy)"},
         {ko:"비가 오는 바람에 소풍이 취소됐어요.", uz:"Yomg'ir yoqib qolgani sababli sayohat bekor bo'ldi. (kutilmagan)"}
       ]}
    ]
  },
  {
    id:"g2",
    title:"조건·가정 (Shart & taxmin)",
    items:[
      {form:"-(으)면",
       meaning:"...sa, agar — shart bajarilgach keyingi ish",
       usage:"Fe'l/sifat asosiga. ㄹ tovushli: 벌다 → 벌면.",
       ex:[
         {ko:"시험에 합격하면 파티를 할 거예요.", uz:"Imtihondan o'tsam, ziyofat qilaman."},
         {ko:"돈을 많이 벌면 집을 살 거예요.", uz:"Ko'p pul topsam, uy sotib olaman."}
       ]},
      {form:"-(으)려면",
       meaning:"...moqchi bo'lsang, ...ish uchun avval (bunga erishishdan oldingi shart)",
       usage:"Maqsadga yetish uchun oldindan kerak bo'ladigan ishni bildiradi.",
       ex:[
         {ko:"시험에 합격하려면 열심히 공부해야 해요.", uz:"Imtihondan o'tish uchun qattiq o'qish kerak."},
         {ko:"건강해지려면 운동을 해야 돼요.", uz:"Sog'lom bo'lish uchun sport qilish kerak."}
       ],
       tip:"-(으)면 = shartdan KEYIN, -(으)려면 = maqsaddan OLDIN"},
      {form:"-아/어야 되다 / 하다",
       meaning:"...ishi kerak, majburiyat",
       usage:"Fe'l/sifat + 아/어야 되다(hamma joyda) yoki 하다(rasmiyroq).",
       ex:[
         {ko:"수업이 끝나자마자 빨리 가야 돼요.", uz:"Dars tugashi bilan tez ketishim kerak."},
         {ko:"약을 먹고 푹 쉬어야 해요.", uz:"Dori ichib, yaxshilab dam olish kerak."}
       ]},
      {form:"-아/어도 돼요 / -(으)면 안 돼요",
       meaning:"ruxsat / taqiq — mumkin / mumkin emas",
       usage:"-아/어도 돼요? = ...sa maylimi? Javob: -(으)세요 (ha) / -(으)면 안 돼요 (yo'q).",
       ex:[
         {ko:"여기 앉아도 돼요?", uz:"Bu yerga o'tirsam bo'ladimi?"},
         {ko:"여기에서 사진을 찍으면 안 돼요.", uz:"Bu yerda surat olish mumkin emas."}
       ]}
    ]
  },
  {
    id:"g3",
    title:"대조·양보 (Qarama-qarshilik)",
    items:[
      {form:"-지만",
       meaning:"...lekin, ammo — ikki fikr qarama-qarshi",
       usage:"Fe'l/sifat asosiga. Eng oddiy qarama-qarshilik bog'lovchisi.",
       ex:[
         {ko:"한국어는 어렵지만 재미있어요.", uz:"Koreys tili qiyin, lekin qiziqarli."},
         {ko:"비싸지만 품질이 좋아요.", uz:"Qimmat, lekin sifati yaxshi."}
       ]},
      {form:"-는데 / -(으)ㄴ데",
       meaning:"...ku, ...gan edi — qarama-qarshilik yoki old kontekst",
       usage:"Fe'l: -는데. Sifat: -(으)ㄴ데. Keyingi gapga fon/zamin beradi.",
       ex:[
         {ko:"같은 회사에서 일하는데 자주 못 만나요.", uz:"Bir kompaniyada ishlaymiz-u, tez-tez ko'risholmaymiz."},
         {ko:"날씨는 좋은데 바람이 많이 불어요.", uz:"Havo yaxshi-yu, lekin shamol kuchli esmoqda."}
       ]},
      {form:"-는 반면에",
       meaning:"...ning aksincha, boshqa tomondan — aniq kontrast",
       usage:"Ikki qarama-qarshi holatni solishtiradi. Keyin ALBATTA teskari mazmun keladi.",
       ex:[
         {ko:"형은 키가 큰 반면에 저는 작아요.", uz:"Akam bo'yi baland, aksincha men pastroqman."},
         {ko:"도시는 편리한 반면에 공기가 나빠요.", uz:"Shahar qulay, boshqa tomondan havosi yomon."}
       ]},
      {form:"-아/어도 (= -더라도)",
       meaning:"...sa ham, ...bo'lsa-da — old shartga bog'liq emas",
       usage:"Old holat qanday bo'lishidan qat'i nazar natija o'zgarmaydi.",
       ex:[
         {ko:"늦게 자도 아침 6시에 일어나요.", uz:"Kech yotsam ham, ertalab 6da turaman."},
         {ko:"아무리 바빠도 아침은 꼭 먹어요.", uz:"Qanchalik band bo'lsam ham, nonushtani albatta qilaman."}
       ]}
    ]
  },
  {
    id:"g4",
    title:"추측 (Taxmin & farazlash)",
    items:[
      {form:"-나 보다 / -(으)ㄴ가 보다",
       meaning:"...ga o'xshaydi, shekilli — dalildan chiqarilgan taxmin",
       usage:"Fe'l: -나 보다. Sifat: -(으)ㄴ가 보다. Ko'rgan/eshitgan narsadan xulosa.",
       ex:[
         {ko:"사람이 많은 걸 보니 저 영화가 재미있나 봐요.", uz:"Odam ko'pligiga qaraganda, u film qiziq shekilli."},
         {ko:"불이 꺼져 있는 걸 보니 집에 아무도 없나 봐요.", uz:"Chiroq o'chiq, uyda hech kim yo'q shekilli."}
       ]},
      {form:"-아/어 보이다",
       meaning:"...ko'rinadi — tashqi ko'rinishdan taxmin (sifat bilan)",
       usage:"Sifat + 아/어 보이다. Ko'z bilan ko'rib chiqarilgan taxmin.",
       ex:[
         {ko:"이 음식이 맛있어 보여서 주문했어요.", uz:"Bu taom mazali ko'ringani uchun buyurtma berdim."},
         {ko:"오늘 피곤해 보이네요.", uz:"Bugun charchagan ko'rinasiz."}
       ]},
      {form:"-(으)ㄹ 것 같다",
       meaning:"...ga o'xshaydi, ...bo'lsa kerak — kelajak yoki umumiy taxmin",
       usage:"Fe'l/sifat + (으)ㄹ 것 같다. Eng ko'p ishlatiladigan taxmin shakli.",
       ex:[
         {ko:"내일 비가 올 것 같아요.", uz:"Ertaga yomg'ir yog'sa kerak."},
         {ko:"이 옷이 너무 작을 것 같아요.", uz:"Bu kiyim juda kichik bo'ladiganga o'xshaydi."}
       ]},
      {form:"-(으)ㄹ지도 모르다",
       meaning:"...bo'lishi ham mumkin — noaniq ehtimol",
       usage:"Fe'l/sifat + (으)ㄹ지도 모르다. Ehtimol past yoki noaniq.",
       ex:[
         {ko:"길이 막힐지도 모르니까 일찍 출발해요.", uz:"Yo'l tirband bo'lishi mumkin, shuning uchun erta chiqamiz."},
         {ko:"그 사람이 안 올지도 몰라요.", uz:"U odam kelmasligi ham mumkin."}
       ]}
    ]
  },
  {
    id:"g5",
    title:"정도·비교 (Daraja & darajaviy)",
    items:[
      {form:"-(으)ㄹ수록",
       meaning:"...gan sari, qancha ko'p ... shuncha — mutanosib o'sish",
       usage:"Ko'pincha '-(으)면 -(으)ㄹ수록' shaklida takrorlanadi.",
       ex:[
         {ko:"한국어는 공부하면 할수록 재미있어요.", uz:"Koreys tilini o'rgangan sari qiziqroq bo'ladi."},
         {ko:"많이 받으면 받을수록 더 좋아요.", uz:"Qancha ko'p olsang, shuncha yaxshi."}
       ]},
      {form:"-(으)ㄹ 정도로 / -(으)ㄹ 만큼",
       meaning:"...darajada, ...gudek — darajani ifodalash",
       usage:"'Qanchalik?' savoliga daraja bilan javob beradi.",
       ex:[
         {ko:"배꼽이 빠질 정도로 웃었어요.", uz:"Kindigim uzilgudek kulib yubordim."},
         {ko:"말도 못 할 정도로 바빴어요.", uz:"Gapira olmaydigan darajada band edim."}
       ]},
      {form:"-(으)ㄴ 나머지",
       meaning:"shunchalik ... bo'lib, natijada — his/holat haddan oshib natija bergani",
       usage:"Old holat (odatda salbiy his) haddan ziyod bo'lib, natija kelib chiqadi.",
       ex:[
         {ko:"너무 긴장한 나머지 말이 안 나왔어요.", uz:"Haddan tashqari asabiylashib, gapim chiqmay qoldi."},
         {ko:"너무 슬픈 나머지 계속 울기만 했어요.", uz:"Juda qayg'urganidan faqat yig'lardi."}
       ]}
    ]
  },
  {
    id:"g6",
    title:"시간·순서 (Vaqt & ketma-ketlik)",
    items:[
      {form:"-자마자",
       meaning:"...bilanoq, ...ishi bilan darhol",
       usage:"Fe'l asosiga. Birinchi ish tugashi bilan darhol keyingisi bo'ladi.",
       ex:[
         {ko:"집에 도착하자마자 잠이 들었어요.", uz:"Uyga yetishim bilanoq uxlab qoldim."},
         {ko:"수업이 끝나자마자 친구를 만나러 갔어요.", uz:"Dars tugashi bilanoq do'stim bilan uchrashishga bordim."}
       ]},
      {form:"-(으)ㄴ 다음에 / -(으)ㄴ 후에 / -고",
       meaning:"...gandan keyin — ketma-ket vaqt",
       usage:"Uchalasi ham 'avval buni qilib, keyin uni' ma'nosini beradi.",
       ex:[
         {ko:"밥을 먹은 다음에 이를 닦아요.", uz:"Ovqat yegandan keyin tish yuvaman."},
         {ko:"손을 씻고 밥을 먹어요.", uz:"Qo'l yuvib, ovqat yeyman."}
       ]},
      {form:"-다가",
       meaning:"...ib turib, ...ning o'rtasida (harakat almashishi)",
       usage:"Bir ish davom etayotganda boshqa ish yuz beradi yoki ishga o'tiladi.",
       ex:[
         {ko:"요리를 하다가 조금 다쳤어요.", uz:"Ovqat pishirayotib, biroz jarohatlandim."},
         {ko:"학교에 가다가 친구를 만났어요.", uz:"Maktabga ketayotib, do'stimni uchratdim."}
       ]}
    ]
  },
  {
    id:"g7",
    title:"경험·습관 (Tajriba & odat)",
    items:[
      {form:"-(으)ㄴ 적이 있다/없다",
       meaning:"...gan (bor/yo'q) — o'tmish tajribasi",
       usage:"Fe'l + (으)ㄴ 적이 있다. = -아/어 봤다 (qilib ko'rgan).",
       ex:[
         {ko:"작년에 제주도에 간 적이 있어요.", uz:"O'tgan yili Jejuga borganman."},
         {ko:"한 번도 지각한 적이 없어요.", uz:"Bir marta ham kechikkan emasman."}
       ],
       tip:"'작년에' kabi o'tmish so'zi bo'lsa faqat o'tgan zamon shakli mos keladi"},
      {form:"-곤 하다",
       meaning:"...ib turardim — o'tmishda takrorlangan odat",
       usage:"O'tmishda qayta-qayta qilingan ish (hozir emas).",
       ex:[
         {ko:"어릴 때 단 음식을 자주 먹곤 했어요.", uz:"Kichikligimda shirinlikni tez-tez yerdim."},
         {ko:"주말이면 등산을 가곤 했어요.", uz:"Dam olish kunlari tog'ga chiqardim."}
       ]},
      {form:"-기 마련이다 / -는 법이다",
       meaning:"...tabiiy, albatta shunday bo'ladi",
       usage:"Umumiy haqiqat/tabiiy hol. ⚠️ Bitta shaxsga nisbatan ISHLATILMAYDI.",
       ex:[
         {ko:"누구나 아프면 고향 생각이 나는 법이에요.", uz:"Har kim kasal bo'lsa vatanini eslaydi (tabiiy)."},
         {ko:"열심히 하면 잘하게 되기 마련이에요.", uz:"Tirishsang, albatta uddalaysan."}
       ],
       tip:"❌ 민수 씨는 아프면 고향 생각이 나는 법이에요 (bitta shaxs bilan bo'lmaydi)"}
    ]
  },
  {
    id:"g8",
    title:"결과·완료 (Natija & yakun)",
    items:[
      {form:"-고 말았다",
       meaning:"oxiri ...ib qo'ydi — istamagan holda yuz bergan (salbiy) natija",
       usage:"Niyat qilinmagan, afsuslanarli ish oxir-oqibat sodir bo'ldi.",
       ex:[
         {ko:"담배를 끊으려고 했지만 다시 피우고 말았어요.", uz:"Chekishni tashlamoqchi edim, lekin yana chekib qo'ydim."},
         {ko:"참으려고 했는데 울고 말았어요.", uz:"Chidamoqchi edim, lekin yig'lab yubordim."}
       ]},
      {form:"-(으)ㄹ 뻔하다",
       meaning:"...ga sal qoldi, ...bo'layozdi (aslida bo'lmadi)",
       usage:"Bir ish yuz berishiga sal qoldi, lekin YUZ BERMADI.",
       ex:[
         {ko:"길이 미끄러워서 넘어질 뻔했어요.", uz:"Yo'l sirpanchiq bo'lib, yiqilayozdim."},
         {ko:"늦잠을 자서 비행기를 놓칠 뻔했어요.", uz:"Uxlab qolib, samolyotga kechikayozdim."}
       ]},
      {form:"-아/어 있다",
       meaning:"...gan holatda — harakat tugagandan keyin holat davomi",
       usage:"Fe'l tugagach, o'sha holat davom etayotganini bildiradi (앉다, 눕다, 서다 kabi).",
       ex:[
         {ko:"의자에 앉아 있어요.", uz:"Stulda o'tirgan holatda (o'tiribdi)."},
         {ko:"문이 열려 있어요.", uz:"Eshik ochiq turibdi."}
       ]}
    ]
  },
  {
    id:"g9",
    title:"목적·의도 (Maqsad & niyat)",
    items:[
      {form:"-기 위해(서)",
       meaning:"...ish uchun — maqsad",
       usage:"Fe'l + 기 위해서. Ot + 을/를 위해서.",
       ex:[
         {ko:"대기업에 지원하기 위해서 열심히 준비해요.", uz:"Yirik kompaniyaga ariza berish uchun qattiq tayyorlanaman."},
         {ko:"건강을 위해서 매일 운동해요.", uz:"Sog'liq uchun har kuni sport qilaman."}
       ]},
      {form:"-기로 하다",
       meaning:"...ishga qaror qildim, ...ishga kelishdik — reja/qaror/va'da",
       usage:"Fe'l + 기로 하다. O'zi bilan qaror yoki boshqalar bilan kelishuv.",
       ex:[
         {ko:"올해부터 담배를 끊기로 했어요.", uz:"Shu yildan chekishni tashlashga qaror qildim."},
         {ko:"주말에 같이 영화를 보기로 했어요.", uz:"Dam olish kuni birga kino ko'rishga kelishib oldik."}
       ]},
      {form:"-는 대신에",
       meaning:"...ning o'rniga, evaziga — almashtirish yoki qoplama",
       usage:"Bir ish o'rniga boshqasini qilish, yoki evaziga qoplama.",
       ex:[
         {ko:"주말에 근무하는 대신에 평일에 쉬어요.", uz:"Dam olish kuni ishlash evaziga ish kuni dam olaman."},
         {ko:"밥을 먹는 대신에 빵을 먹었어요.", uz:"Guruch o'rniga non yedim."}
       ]}
    ]
  },
  {
    id:"g10",
    title:"기타 핵심 문법 (Boshqa muhim shakllar)",
    items:[
      {form:"-(으)ㄹ 만하다",
       meaning:"...ishga arziydi, ...sa bo'ladi — qadr-qimmat bor",
       usage:"Fe'l + (으)ㄹ 만하다. Biror ishni qilishga arzishini bildiradi.",
       ex:[
         {ko:"제주도는 한 번 가 볼 만한 곳이에요.", uz:"Jeju bir bora borishga arzigulik joy."},
         {ko:"이 책은 읽을 만해요.", uz:"Bu kitob o'qishga arziydi."}
       ]},
      {form:"-(으)ㄹ 수밖에 없다",
       meaning:"...ishdan boshqa yo'l yo'q; tabiiyki shunday",
       usage:"① Boshqa iloji yo'q ② Natija tabiiy/muqarrar.",
       ex:[
         {ko:"버스가 끊겨서 택시를 탈 수밖에 없었어요.", uz:"Avtobus qatnovi tugab, taksiga o'tirishdan boshqa yo'l qolmadi."},
         {ko:"옷을 얇게 입어서 추울 수밖에 없지요.", uz:"Yupqa kiyingansiz, sovuq qotishingiz tabiiy-da."}
       ]},
      {form:"-는 척하다",
       meaning:"...ganga olmoq, yolg'ondan ...moq",
       usage:"Fe'l: -는 척하다. Sifat: -(으)ㄴ 척하다. Aslida unday emas.",
       ex:[
         {ko:"자는 척했어요.", uz:"Uxlayotganga oldim."},
         {ko:"모르는 척하지 마세요.", uz:"Bilmaganga olmang."}
       ]},
      {form:"형용사-게 / 형용사-(으)ㄴ + 명사",
       meaning:"ravish shakli (fe'lni bezaydi) / sifat + ot",
       usage:"Fe'l oldida: 형용사 + 게. Ot oldida: 형용사 + (으)ㄴ.",
       ex:[
         {ko:"머리를 짧게 잘라 주세요.", uz:"Sochni kalta qilib kesing. (fe'lni bezaydi)"},
         {ko:"짧은 머리가 잘 어울려요.", uz:"Kalta soch juda yarashadi. (otni bezaydi)"}
       ]},
      {form:"간접화법 (bevosita gap)",
       meaning:"boshqaning gapini yetkazish",
       usage:"Buyruq → -(으)라고 하다. Darak → -(느)ㄴ다고 하다. Savol → -냐고 하다. Taklif → -자고 하다.",
       ex:[
         {ko:"의사가 약을 먹고 푹 쉬라고 했어요.", uz:"Shifokor dori ichib, yaxshilab dam olishni aytdi. (buyruq)"},
         {ko:"친구가 같이 가자고 했어요.", uz:"Do'stim birga ketaylik dedi. (taklif)"}
       ]}
    ]
  }
];
