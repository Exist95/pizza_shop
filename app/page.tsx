import { Categories, Container, Filters, SortPopup, Title, TopBar } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="전체 메뉴" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">

          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="1"
                categoryId={1}
                items={[
                  {
                    id: 121,
                    name: '맛있는 피자',
                    imageUrl: "https://i.namu.wiki/i/umI-heVYVS9miQNqXM13FRUOHHL4l1nzsZgN9XRLFG7nI_7Dyf-Myr6HmiWf9Qd7SAZQz3WYSQHPXXtGAwLTag.webp",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 122,
                    name: '맛있는 피자',
                    imageUrl: "https://i.namu.wiki/i/umI-heVYVS9miQNqXM13FRUOHHL4l1nzsZgN9XRLFG7nI_7Dyf-Myr6HmiWf9Qd7SAZQz3WYSQHPXXtGAwLTag.webp",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 123,
                    name: '맛있는 피자',
                    imageUrl: "https://i.namu.wiki/i/umI-heVYVS9miQNqXM13FRUOHHL4l1nzsZgN9XRLFG7nI_7Dyf-Myr6HmiWf9Qd7SAZQz3WYSQHPXXtGAwLTag.webp",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 124,
                    name: '맛있는 피자',
                    imageUrl: "https://i.namu.wiki/i/umI-heVYVS9miQNqXM13FRUOHHL4l1nzsZgN9XRLFG7nI_7Dyf-Myr6HmiWf9Qd7SAZQz3WYSQHPXXtGAwLTag.webp",
                    price: 550,
                    items: [{ price: 550 }]
                  }
                ]}
              />
              <ProductsGroupList
                title="2"
                categoryId={2}
                items={[
                  {
                    id: 211,
                    name: '맛있는 피자',
                    imageUrl: "https://i.namu.wiki/i/umI-heVYVS9miQNqXM13FRUOHHL4l1nzsZgN9XRLFG7nI_7Dyf-Myr6HmiWf9Qd7SAZQz3WYSQHPXXtGAwLTag.webp",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 221,
                    name: '맛있는 피자',
                    imageUrl: "https://i.namu.wiki/i/umI-heVYVS9miQNqXM13FRUOHHL4l1nzsZgN9XRLFG7nI_7Dyf-Myr6HmiWf9Qd7SAZQz3WYSQHPXXtGAwLTag.webp",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 231,
                    name: '맛있는 피자',
                    imageUrl: "https://i.namu.wiki/i/umI-heVYVS9miQNqXM13FRUOHHL4l1nzsZgN9XRLFG7nI_7Dyf-Myr6HmiWf9Qd7SAZQz3WYSQHPXXtGAwLTag.webp",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 241,
                    name: '맛있는 피자',
                    imageUrl: "https://i.namu.wiki/i/umI-heVYVS9miQNqXM13FRUOHHL4l1nzsZgN9XRLFG7nI_7Dyf-Myr6HmiWf9Qd7SAZQz3WYSQHPXXtGAwLTag.webp",
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 251,
                    name: '맛있는 피자',
                    imageUrl: "https://i.namu.wiki/i/umI-heVYVS9miQNqXM13FRUOHHL4l1nzsZgN9XRLFG7nI_7Dyf-Myr6HmiWf9Qd7SAZQz3WYSQHPXXtGAwLTag.webp",
                    price: 550,
                    items: [{ price: 550 }]
                  }
                ]}

              />
            </div>
          </div>

        </div>

      </Container>
    </>
  )
}
