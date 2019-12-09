import React, { useCallback, useState } from 'react';
import {
    Button,
    Card,
    Form,
    FormLayout,
    Layout,
    Page,
    Stack,
    TextField,
    SettingToggle,
    TextStyle,
    Select
} from '@shopify/polaris';

class Discount extends React.Component {
    state = {
        discount: '10%',
        max_discount: '25%',
        enabled: false
    };

    render() {
        const { discount, max_discount, enabled } = this.state;
        const contentStatus = enabled ? 'Disable' : 'Enable';
        const textStatus = enabled ? 'enabled' : 'disabled';

        // const [selected, setSelected] = useState('today');
        // const handleSelectChange = useCallback((value) => setSelected(value), []);
        const options = [
            { label: 'product 1', value: 'product 1' },
            { label: 'product 2', value: 'product 2' },
            { label: 'product 3', value: 'product 3' },
        ];
        return (
            <Page>
                <Layout>
                    <Layout.AnnotatedSection
                        title="Default discount"
                        description="Add a product to Sample App, it will automatically be discounted."
                    >
                        <Card sectioned>
                            <Form onSubmit={this.handleSubmit}>
                                <FormLayout>
                                    <TextField
                                        value={discount}
                                        onChange={this.handleChange('discount')}
                                        label="Discount percentage"
                                        type="discount"
                                    />
                                    <TextField
                                        value={max_discount}
                                        onChange={this.handleChange('max_discount')}
                                        label="Max Discount percentage"
                                        type="maxDiscount"
                                    />
                                    <Stack distribution="trailing">
                                        <Button primary submit>
                                            Save
                                    </Button>
                                    </Stack>
                                </FormLayout>
                            </Form>
                        </Card>
                    </Layout.AnnotatedSection>
                    <Layout.AnnotatedSection
                        title="Price updates"
                        description="Temporarily disable all Sample App price updates"
                    >
                        <SettingToggle
                            action={{
                                content: contentStatus,
                                onAction: this.handleToggle,
                            }}
                            enabled={enabled}
                        >
                            This setting is{' '}
                            <TextStyle variation="strong">{textStatus}</TextStyle>.
                        </SettingToggle>
                    </Layout.AnnotatedSection>
                    <Layout.AnnotatedSection
                        title="Select Product"
                        description="Select product from this list"
                    >
                        <Select
                            label="Select a Product"
                            options={options}
                        // onChange={handleSelectChange}
                        // value={selected}
                        />
                    </Layout.AnnotatedSection>
                </Layout>
            </Page>
        );
    }

    handleSubmit = () => {
        this.setState({
            discount: this.state.discount,
            max_discount: this.state.max_discount
        });
        console.log('submission discount', this.state.discount);
        console.log('submission max_discount', this.state.max_discount);
    };

    handleChange = (field) => {
        return (value) => this.setState({ [field]: value });
    };
    handleToggle = () => {
        this.setState(({ enabled }) => {
            return { enabled: !enabled };
        });
    };

}

export default Discount;
